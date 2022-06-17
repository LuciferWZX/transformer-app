import {defineModel} from "foca";
import {ComponentContainer, ComponentCollectionType, SchemaType, ComponentType} from "@/models/editorModelType";
import {IconName} from "@/types/icon";
import {GlobalSchema} from "./editorModelType";
import {DragEndEvent, DragOverEvent, UniqueIdentifier} from "@dnd-kit/core";
import {generateComponent} from "@/utils/util";

export interface EditorModelState{
    components:ComponentCollectionType[]
    componentsContainer:ComponentContainer[]
    componentListVisible:boolean
    draggedId:UniqueIdentifier|null
    schema:GlobalSchema
    currentPageId:string //当前页面的id
}
const initialState:EditorModelState={
    components:[{
        type:"Input",
        kind:"DataEntry",
        name:"输入框",
        icon:IconName.InputIcon
    },{
        type:"TextareaInput",
        kind:"DataEntry",
        name:"多行输入框",
        icon:IconName.TextareaInputIcon
    },{
        type:"NumberInput",
        kind:"DataEntry",
        name:"数字输入框",
        icon:IconName.NumberInputIcon
    },{
            type:"PasswordInput",
            kind:"DataEntry",
            name:"密码输入框",
            icon:IconName.PasswordInputIcon
        }],
    componentsContainer:[
        {type:"Container",name:"容器"},
        {type:"DataEntry",name:"数据录入"},
    ],
    componentListVisible:true,
    draggedId:null,
    currentPageId:"initial-page-id",
    schema:{
        config:null,
        schemas:[
            {
                id:"initial-page-id",
                type:"Page",
                name:"主页面",
                config:null,
                childrenIds:[]
            }
        ]
    }
}

export const editorModel = defineModel('editor',{
    initialState,
    events:{
        onInit(){
            console.log("初始化编辑器model")
        },
        onChange(prevState,nextState){
            if(prevState.schema !== nextState.schema){
                console.log("prevState:",prevState)
                console.log("nextState:",nextState)
            }
        }
    },
    effects:{
        /***
         * 通过id寻找对应的组件
         * @param id
         */
        findComponentById(id:UniqueIdentifier){
            return this.state.schema.schemas.find(schema=>schema.id === id)
        }
    },
    actions:{
        //更新组件列表的visible
        updateComponentListVisible(state,visible:boolean){
            state.componentListVisible = visible
        },
        //更新正在拖拉的id
        updateDraggedId(state,id:string|null){
            state.draggedId = id
        },
        //更新正在拖拉的id
        updateComponents(state,components:ComponentCollectionType[]){
            state.components = components
        }
    },
    computed:{
    }
})