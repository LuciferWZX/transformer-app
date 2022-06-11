import {FC} from "react";
import {MainHeaderBox} from "@/layouts/mainLayout/style";
import MainPagesHeader from "@/layouts/mainLayout/headerContents/MainPagesHeader";

const MainHeader:FC = () => {
   
    //渲染首页的头部
    const renderMainPageHeader=()=>{
        return(
            <MainPagesHeader />
        )
    }
    return(
        <MainHeaderBox>
            {renderMainPageHeader()}
        </MainHeaderBox>
    )
}
export default MainHeader