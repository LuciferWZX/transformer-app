import React, {FC, Fragment} from "react";
import {Navigate} from "react-router-dom";
import {useModel} from "foca";
import {userModel} from "@/models/userModel";
interface IProps{
    children?:React.ReactNode
}
const Auth:FC<IProps> = ({children}) => {
    const {user} = useModel(userModel);
    if (!user){
        return <Navigate to="/login"/>
    }
    return <Fragment>{children}</Fragment>
}
export default Auth