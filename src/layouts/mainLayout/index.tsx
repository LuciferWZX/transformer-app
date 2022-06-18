import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import {MainLayoutBox} from "@/layouts/mainLayout/style";
import {useNProgress} from "@/hooks/useNProgress";


const MainLayout:FC = () => {
    useNProgress()
    return(
        <MainLayoutBox>
            mainLayout
            <Outlet/>
        </MainLayoutBox>
    )
}
export default MainLayout