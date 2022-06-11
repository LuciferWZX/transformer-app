import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import MainHeader from "@/layouts/mainLayout/MainHeader";
import MainContent from "@/layouts/mainLayout/MainContent";
import {MainLayoutBox} from "@/layouts/mainLayout/style";
import {useNProgress} from "@/hooks/useNProgress";


const MainLayout:FC = () => {
    useNProgress()
    return(
        <MainLayoutBox>
            <MainHeader />
            <MainContent>
                <Outlet/>
            </MainContent>
        </MainLayoutBox>
    )
}
export default MainLayout