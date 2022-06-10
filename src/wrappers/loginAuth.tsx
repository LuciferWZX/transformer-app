import React, {FC, Fragment} from "react";
import {Navigate} from "react-router-dom";
import {useModel} from "foca";
import {userModel} from "@/models/userModel";
interface IProps{
    children?:React.ReactNode
}
const LoginAuth:FC<IProps> = ({children}) => {
    const {user} = useModel(userModel);
    console.log("login_auth",user)
    if (user){
        return <Navigate to="/"/>
    }
    return <Fragment>{children}</Fragment>
}
export default LoginAuth