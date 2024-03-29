import React, {FC, useLayoutEffect} from "react";
import { Outlet } from "react-router-dom";
import {Keyword, LoginLayoutBox} from "@/layouts/loginLayout/style";
import {ImageBox, OutletBox} from "@/layouts/loginLayout/style";
import {Image, Space} from "antd";
import { userModel } from "@/models/userModel";
import MultiLoginModal from "@/layouts/loginLayout/MultiLoginModal";



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
                <Space>
                    <div className={'title-box'}>
                        <div className={'img-tip'}>智能<Keyword>小助手</Keyword></div>
                        <div className={'img-tip'}>让你的工作更<Keyword>简单</Keyword></div>
                    </div>
                    <img alt={'vite'} src={'/logo.svg'} className={'vite-logo'} />
                </Space>
                <Image preview={false} src={"/assets/svg/login_pic.svg"}/>
            </ImageBox>
            <OutletBox>
                <Outlet/>
            </OutletBox>
            <MultiLoginModal/>
        </LoginLayoutBox>
    )
}
export default LoginLayout