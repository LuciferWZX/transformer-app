import { ErrorType } from '@/types/request';
import {extend, ResponseError} from 'umi-request';
import {message} from "antd";
import {userModel} from "@/models/userModel";
const errorHandler=(error:ResponseError<any>)=>{
    const ERROR_KEY = "error_key"
    if(error.response){
        // 请求已发送但服务端返回状态码非 2xx 的响应
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.data);
        console.log(error.request);
    }else{
        // 请求初始化时出错或者没有响应返回的异常
        if(error.type === ErrorType.Timeout){
            message.error({content:"连接超时，请稍后再试",key:ERROR_KEY})
        }
        console.log(error.type);
        console.log(error.message);
    }
    return
}
const request = extend({
    prefix: '/api/v1',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    errorHandler:errorHandler
});
// request拦截器
request.interceptors.request.use((url, options) => {
    const optionObj:any = {}
    //用户有token就存入token
    if(userModel.state.loginInfo){
        optionObj.Authorization = `Bearer ${userModel.state.loginInfo.token}`
    }
    return {
        url: url,
        options: {
            ...options,
            headers:{
                ...options.headers,
                ...optionObj
            }
        },
    };
});
export default request