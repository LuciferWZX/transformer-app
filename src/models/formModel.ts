import {defineModel} from "foca";
import {FormParams, FormType} from "@/models/formModelType";
import {getFormList} from "@/servers/form";
export interface FormModelState{
    formParams:FormParams
    formList:FormType[]
    totalCount:number
}
const initialState:FormModelState={
    formParams:{
        key:"",
        page:1,
        pageNum:10
    },
    totalCount:0,
    formList:[]
}
export const formModel = defineModel('list',{
    initialState,
    events:{
        onInit(){
            console.log("初始化form模块",this.state)
        },
        onChange(prevState, nextState){
            if(prevState.formParams.key!==nextState.formParams.key){
                //关键字改变，查询接口
                this.queryList()
            }
        }
    },
    effects:{
        async queryList(){
            
            const result =await getFormList({
                ...this.state.formParams
            })
            if(result && result.code===0 && result.data ){
                this.updateFormList(result.data,result.total_count??0)
            }
        }
    },
    actions:{
        //更新formList
        updateFormList(state,formList:FormType[],totalCount:number){
            state.formList = formList
            state.totalCount=totalCount
        },
        //更新FormParams
        updateFormParams(state, formParams:{key?:string,page?:number,pageNum?:number}){
            const {key,pageNum,page}=formParams
            if(key!==undefined){
                state.formParams.key = key
            }
            if(page!==undefined){
                state.formParams.page = page
            }
            if(pageNum!==undefined){
                state.formParams.pageNum = pageNum
            }
        }
    },
    computed:{
        //获取到分页的总数
        getTotalPage(){
            return this.state.totalCount/this.state.formParams.pageNum
        }
    }
})