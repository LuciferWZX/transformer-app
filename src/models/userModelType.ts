export interface User{
    multi_login: boolean
    token:string
    username:string
}
//系统设置的类型
export interface SystemConfig{
    agent_id: string
    captcha: boolean
    crop_id: string
    redirect_uri: string
    session_timeout: number
}
//验证码
export interface CaptchaType{
    captcha_id: string
    captcha_image:string
}
// 验证码请求参数
export interface CaptchaRequestParam {
    height: number; // 图片高度 20-180
    width: number; // 图片宽度 20-480
    length: number; // 验证码位数 1-10
    noise?: number; // 图片噪点数量 (选填) 0-480
}
// 用户登录请求的参数
export interface AccountLoginParams {
    captcha: string
    captcha_id: string
    keep_login: boolean
    password: string
    username: string
}