import {defineModel} from "foca";
import {ComponentContainer, ComponentCollectionType, SchemaType, ComponentType} from "@/models/editorModelType";
import {IconName} from "@/types/icon";
import {GlobalSchema} from "./editorModelType";
import {DragEndEvent, UniqueIdentifier} from "@dnd-kit/core";
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
        },
        //处理拖拉拽停止事件
        handleDragEndEvent(state,event:DragEndEvent){
            console.log("event:",event)
            if(event.over && event.active){ //在当前的容器上放开
                const targetCurrent=event.over.data.current
                const activeCurrent=event.active.data.current
                if(activeCurrent?.justDisplay && targetCurrent?.inCanvas){
                    //从左侧列表拉过来-------->画布中
                    if(targetCurrent?.isPage){
                        //说明是Page类型
                        console.log("1")
                        editorModel.canvasAddComponent(event.over.id as string,event.active.id as ComponentType,true)
                    }
                }
            }
        },
        //画布新增组件
        /***
         *
         * @param state
         * @param parentId 需要加载哪个id容器里面
         * @param type 生成组件的类型
         * @param isPage 是否是page类型（是的话就是第一层，其余可以直接通用方法）
         */
        canvasAddComponent(state,parentId:string,type:ComponentType,isPage?:boolean){
            const newComponent = generateComponent(type)
            if(newComponent){
                if(isPage){
                    const parent = state.schema.schemas.find(page=>page.id === parentId)
                    if(parent){
                        parent?.childrenIds?.push(newComponent.id)
                        state.schema.schemas.push(newComponent)
                    }
                }
            }else{
                throw Error("该组件类型不存在")
            }
        }
    },
    computed:{
    }
})