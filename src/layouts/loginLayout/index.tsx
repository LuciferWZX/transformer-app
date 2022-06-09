import React, {FC, useLayoutEffect} from "react";
import { Outlet } from "react-router-dom";
import {Keyword, LoginLayoutBox} from "@/layouts/loginLayout/style";
import {ImageBox, OutletBox} from "@/layouts/loginLayout/style";
import {Image} from "antd";
import { userModel } from "@/models/userModel";



const LoginLayout:FC = () => {
    useLayoutEffect(()=>{
        initData()
    },[]);
    //初始化数据（获取接口）
    const initData=async ()=>{
        await userModel.querySystemConfig()
    }
    return(
        <LoginLayoutBox>
            <ImageBox>
                <div className={'img-tip'}>智能<Keyword>小助手</Keyword></div>
                <div className={'img-tip'}>让你的工作更<Keyword>简单</Keyword></div>
                <Image preview={false} src={"/assets/svg/login_pic.svg"}/>
            </ImageBox>
            <OutletBox>
                <Outlet/>
            </OutletBox>
        </LoginLayoutBox>
    )
}
export default LoginLayout