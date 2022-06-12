import {HomeBox} from "@/pages/home/style";
import HomeHeader from "@/pages/home/HomeHeader";
import { useLayoutEffect } from "react";
import {formModel} from "@/models/formModel";
import ActionBar from "@/pages/home/ActionBar";
import FormTable from "@/pages/home/FormTable";
import TablePagination from "@/pages/home/TablePagination";
import AddFormModal from "@/pages/home/modals/AddFormModal";
const HomePage = () => {
    useLayoutEffect(()=>{
        //查询表单数据
        formModel.queryList().then()
    },[]);
    
    return(
        <HomeBox>
            <HomeHeader/>
            <ActionBar/>
            <FormTable />
            <TablePagination/>
            <AddFormModal/>
        </HomeBox>
    )
}
export default HomePage