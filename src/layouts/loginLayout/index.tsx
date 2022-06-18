import React, {FC} from "react";
import { Outlet } from "react-router-dom";
import {LoginLayoutBox} from "@/layouts/loginLayout/style";



const LoginLayout:FC = () => {
    return(
        <LoginLayoutBox>
            loginLayout
            <Outlet/>
        </LoginLayoutBox>
    )
}
export default LoginLayout