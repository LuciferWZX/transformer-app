import request from "@/utils/request";
import {ServerResult} from "@/types/request";
import {AccountLoginParams, CaptchaRequestParam, CaptchaType, SystemConfig, User} from "@/models/userModelType";

//查询系统配置信息
export const getSystemConfig = async ():Promise<ServerResult<SystemConfig>|undefined> => {
    return await request('/system/config', {
        method: 'get',
    });
};
//查询验证码图形
export const getCaptcha = async (params: CaptchaRequestParam):Promise<ServerResult<CaptchaType>|undefined> => {
    return await request(`/user/captcha`, {
        method: 'post',
        data: params,
    });
};
//中控账户登录
export const login = async (params: AccountLoginParams):Promise<ServerResult<Pick<User, 'token'|'multi_login'>|undefined>|undefined> => {
    return await request(`/user/login`, {
        method: 'post',
        data: params,
    });
};