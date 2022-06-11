import React, {FC} from "react";
import {MainContentBox} from "@/layouts/mainLayout/style";
interface IProps{
    children?:React.ReactNode
}
const MainContent:FC<IProps> = (props) => {
    const {children}=props
    return(
        <MainContentBox>
            {children}
        </MainContentBox>
    )
}
export default MainContent