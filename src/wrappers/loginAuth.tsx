import React, {FC, Fragment} from "react";
import {Navigate} from "react-router-dom";
import {useModel} from "foca";
import {userStore} from "@/stores/userStore/userStore";
interface IProps{
    children?:React.ReactNode
}
const LoginAuth:FC<IProps> = ({children}) => {
    const {user} = useModel(userStore);
    console.log("对路由鉴权2：",user)
    if (user){
        return <Navigate to="/"/>
    }
    return <Fragment>{children}</Fragment>
}
export default LoginAuth