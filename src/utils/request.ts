import { ErrorType } from '@/types/request';
import {extend, ResponseError} from 'umi-request';
import {message} from "antd";
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
export default request