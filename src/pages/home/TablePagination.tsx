import {FC} from "react";
import {TablePaginationBox} from "@/pages/home/style";
import { Pagination } from "antd";
import {useLoading, useModel} from "foca";
import {formModel} from "@/models/formModel";

const TablePagination:FC = () => {
    const loading = useLoading(formModel.queryList)
    const {page,pageSize,totalCount} = useModel(formModel,state => ({
        page:state.formParams.page,
        pageSize:state.formParams.page_size ,
        totalCount:state.totalCount
    }))
    const changePage=async (_page:number,_pageSize:number)=>{
        formModel.updateFormParams({
            page:_page,
            page_size:_pageSize
        })
    }
    return(
        <TablePaginationBox>
            <Pagination disabled={loading} hideOnSinglePage={true} pageSize={pageSize} current={page} onChange={changePage} total={totalCount} pageSizeOptions={[10,20,40,50]} />
        </TablePaginationBox>
    )
}
export default TablePagination