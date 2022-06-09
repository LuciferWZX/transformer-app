import {defineModel} from "foca";
import {AccountLoginParams, CaptchaRequestParam, CaptchaType, SystemConfig, User} from "@/models/userModelType";
import {getCaptcha, getSystemConfig, login} from "@/servers/user";
import {ServerResult} from "@/types/request";
import {parseJwt} from "@/utils/util";
export interface UserModelState {
    user:User|null
    systemConfig:SystemConfig|null
    captcha:CaptchaType|null
}
const initialState:UserModelState = {
    user:null,
    systemConfig:null,
    captcha:null
}
export const userModel = defineModel('user',{
    initialState,
    events:{
        onInit(){
            console.log("model里面的user",this.state.user)
            //this.login()
        }
    },
    actions:{
       
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
        //查询验证码
        async queryCaptcha(params:CaptchaRequestParam){
            const result = await getCaptcha(params)
            if(result && result.code === 0){
                this.setState(state => {
                    state.captcha = result.data
                })
            }
        },
        //用户账户登录
        async accountLogin(params:Omit<AccountLoginParams, "captcha_id">):Promise<ServerResult<undefined>|undefined>{
            if(this.state.captcha){
                const result = await login({
                    ...params,
                    captcha_id:this.state.captcha.captcha_id
                })
                if(result){
                    if (result.code === 0 && result.data){
                        const data:Pick<User, 'token'|'multi_login'> = result.data
                        const username = parseJwt(data.token).sub
                        this.setState(state => {
                            state.user = {
                                username: username,
                                multi_login: data.multi_login,
                                token: data.token
                            }
                        })
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
                
            }
            
           
            //.....
            // this.setState(state => {
            //     state.user = {
            //         username:"developer"
            //     }
            // })
        }
    }
})