import request from "@/utils/request";
import {AdvanceResponse} from "@/types/request";
import {
    AccountLoginParams,
    CaptchaRequestParam,
    CaptchaType,
    SystemConfig,
    UserLoginInfo
} from "@/models/userModelType";

//查询系统配置信息
export const getSystemConfig = async ():AdvanceResponse<SystemConfig> => {
    return await request('/system/config', {
        method: 'get',
    });
};
//查询验证码图形
export const getCaptcha = async (params: CaptchaRequestParam):AdvanceResponse<CaptchaType> => {
    return await request(`/user/captcha`, {
        method: 'post',
        data: params,
    });
};
//中控账户登录
export const login = async (params: AccountLoginParams):AdvanceResponse<UserLoginInfo|undefined> => {
    return await request(`/user/login`, {
        method: 'post',
        data: params,
    });
};
// 当多设备登录时,用于确认是否继续登录的接口
// 确认是否继续登录,继续登录会踢掉新的登录,否则会踢掉当前的登录
// continue 确认登录 cancel 取消登录
export const loginEnsure = async (params: { action: "continue"|"cancel" }):AdvanceResponse<undefined> => {
    return await request(`/user/login/ensure`, {
        method: 'post',
        data: params
    });
};
//token登录
export const tokenLogin = async (token: string):AdvanceResponse<UserLoginInfo|undefined> => {
    return await request(`/user/token/login`, {
        method: 'post',
        data: {
            keep_login: true,
            token,
        },
    });
};
//退出登录
export const logout = async ():AdvanceResponse<undefined>=> {
    return await request(`/user/logout`, {
        method: 'post',
    });
};