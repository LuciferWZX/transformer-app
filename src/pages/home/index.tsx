import {HomeBox} from "@/pages/home/style";
import HomeHeader from "@/pages/home/HomeHeader";
import { useLayoutEffect } from "react";
import {formModel} from "@/models/formModel";
import ActionBar from "@/pages/home/ActionBar";
const HomePage = () => {
    useLayoutEffect(()=>{
        //查询表单数据
        formModel.queryList().then()
    },[]);
    
    return(
        <HomeBox>
            <HomeHeader/>
            <ActionBar/>
            HomePage
        </HomeBox>
    )
}
export default HomePage