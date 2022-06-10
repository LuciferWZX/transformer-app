import {defineModel} from "foca";
import {
    AccountLoginParams,
    CaptchaRequestParam,
    CaptchaType,
    SystemConfig,
    User,
    UserLoginInfo
} from "@/models/userModelType";
import {getCaptcha, getSystemConfig, login, loginEnsure, tokenLogin} from "@/servers/user";
import {ServerResult} from "@/types/request";
import {parseJwt} from "@/utils/util";
import {message} from "antd";
export interface UserModelState {
    user:User|null
    loginInfo:UserLoginInfo|null
    systemConfig:SystemConfig|null
    captcha:CaptchaType|null
}
const initialState:UserModelState = {
    user:null,
    loginInfo:null,
    systemConfig:null,
    captcha:null
}
export const userModel = defineModel('user',{
    initialState,
    events:{
        onInit(){
            console.log("之前的用户缓存：",this.state.user)
            this.removeLoginInfo()
            this.removeCaptcha()
            if(this.state.user){
                this.verifyToken(this.state.user.token)
            }
        }
    },
    actions:{
        //设置user
        setUser(state,user:User|null){
          state.user = user
        },
        //设置loginInfo
        setLoginInfo(state,info:UserLoginInfo|null){
          state.loginInfo = info
        },
        //清除loginInfo数据
        removeLoginInfo(state){
           state.loginInfo = null
        },
        //清除验证码
        removeCaptcha(state){
            state.captcha = null
        },
        //清除所有的数据
        clear(){
            return this.initialState
        }
    },
    effects:{
        //查询系统的配置项
        async querySystemConfig(){
            const result =await getSystemConfig()
            if(result && result.code === 0){
                this.setState(state => {
                    state.systemConfig = result.data
                })
            }
        },
        //使用token登录
        async verifyToken(token:string){
            const result = await tokenLogin(token)
            if (result && result.code === 0 && result.data){
                this.setLoginInfo({
                    multi_login:result.data.multi_login,
                    token:result.data.token
                })
            }
        },
        //查询验证码
        async queryCaptcha(params:CaptchaRequestParam){
            const result = await getCaptcha(params)
            if(result && result.code === 0){
                this.setState(state => {
                    state.captcha = result.data
                })
            }
        },
        //强制登录
        async forceLogin(action:"continue"|"cancel"){
            const result = await loginEnsure({action:action})
            if(result && result.code === 0 && action === "continue"){
                message.success("登录成功")
                if(this.state.loginInfo){
                    const {token} = this.state.loginInfo
                    const username = parseJwt(token).sub
                    this.setUser({
                        username:username,
                        token:token
                    })
                    this.setLoginInfo({
                        multi_login: false,
                        token:token
                    })
                }
            }else{
                userModel.removeLoginInfo()
            }
        },
        //用户账户登录
        async accountLogin(params:Omit<AccountLoginParams, "captcha_id">):Promise<ServerResult<undefined>|undefined>{
            const result = await login({
                ...params,
                captcha_id:this.state.captcha?.captcha_id
            })
            if(result){
                if (result.code === 0 && result.data){
                    const data = result.data
                    this.setLoginInfo({
                        multi_login: data.multi_login,
                        token: data.token
                    })
                    //如果没有多处登录就直接登录
                    if(!data.multi_login){
                        const username = parseJwt(data.token).sub
                        this.setUser({
                            username:username,
                            token:data.token
                        })
                    }
                   
                    return
                }
                let msg = result.msg
                if(result.code ===10001){
                    msg="验证码错误"
                }else if(result.code === 9800021){
                    msg="用户已锁定，请联系管理员"
                }else{
                    msg="请输入正确的用户名和密码"
                }
                return {
                    ...result,
                    msg:msg,
                    data:undefined
                }
            }
            return result
            
           
            //.....
            // this.setState(state => {
            //     state.user = {
            //         username:"developer"
            //     }
            // })
        }
    },
    computed:{
        //是否是多方登录
        isMultiLogin(){
            return !!this.state.loginInfo?.multi_login
        },
        //是否展示验证码
        showCaptcha(){
            return !!this.state.systemConfig?.captcha
        },
        //刷新验证码的时间(存在登录信息说明登录着，无需再刷新验证码)
        refreshCaptchaCountDown(){
            if(!!this.state.loginInfo){
                return undefined
            }
            return 60*1000
        }
    }
})