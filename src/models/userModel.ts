import {defineModel} from "foca";
interface User {
    username:string
    token:string
}
export interface UserModelState {
    user:User|null
}
const initialState:UserModelState = {
    user:null,
}
export const userModel = defineModel('user',{
    initialState,
    events:{
        async onInit(){
            console.log("初始化user模块")
        }
    },
    actions:{
        //设置user
        setUser(state,user:User|null){
          state.user = user
        },
        //清除所有的数据
        clear(){
            return this.initialState
        }
    },
    effects:{
        //查询系统的配置项
        async queryUserInfo(){
            //do request
        },


    },
    computed:{
        //是否是多方登录
        isLogin(){
            return !!this.state.user
        },
    }
})