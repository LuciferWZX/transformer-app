import {defineModel} from "foca";
import {FormParams, FormType} from "@/models/formModelType";
import {createForm, getFormList} from "@/servers/form";
export interface FormModelState{
    formParams:FormParams
    formList:FormType[]
    totalCount:number
    addFormVisible:boolean
}
const initialState:FormModelState={
    formParams:{
        key:"",
        page:1,
        page_size:10
    },
    totalCount:0,
    formList:[],
    addFormVisible:false
}
export const formModel = defineModel('list',{
    initialState,
    events:{
        onInit(){
            console.log("初始化form模块",this.state)
        },
        onChange(prevState, nextState){
            if(
                prevState.formParams.key!==nextState.formParams.key||
                prevState.formParams.page!==nextState.formParams.page||
                prevState.formParams.page_size!==nextState.formParams.page_size
            ){
                //关键字改变，查询接口
                this.queryList()
            }
        }
    },
    effects:{
        //查询列表
        async queryList(){
            const result =await getFormList({
                ...this.state.formParams
            })
            if(result && result.code===0 && result.data ){
                this.updateFormList(result.data,result.total_count??0)
            }
        },
        //新建个表单
        async createNewForm(name:string){
            const result =await createForm(name)
            console.log("新建的表单：",result)
            if(result && result.code===0 && result.data ){
                console.log("新的表单：",result.data)
            }
            return result
        }
    },
    actions:{
        //更新formList
        updateFormList(state,formList:FormType[],totalCount:number){
            state.formList = formList
            state.totalCount=totalCount
        },
        //更新FormParams
        updateFormParams(state, formParams:{key?:string,page?:number,page_size?:number}){
            const {key,page_size,page}=formParams
            if(key!==undefined){
                state.formParams.key = key
            }
            if(page!==undefined){
                state.formParams.page = page
            }
            if(page_size!==undefined){
                state.formParams.page_size = page_size
            }
        },
        //更新新增的状态
        updateAddFormVisible(state,visible:boolean){
            state.addFormVisible = visible
        }
    },
    computed:{
        //获取到分页的总数
        getTotalPageNum(){
            return Math.ceil((this.state.totalCount)/(this.state.formParams.page_size));
        }
    }
})