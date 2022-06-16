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
        },
        //处理拖拉拽停止事件
        handleDragEndEvent(state,event:DragEndEvent){
            const {over,active} = event
            console.log("我抓的节点:||",active)
            console.log("我的目标节点:||",over)
            if(over){
                //目标节点存在
                const parentId = over.data.current.parentId
                if(parentId){
            
                }else{
                    //目标没有父亲节点说明是页面
                    const justDisplay = !!state.components.find(comp=>comp.type === active.id) //我抓的节点是否是展示的原始数据
                    if(justDisplay){//从左侧拖入对的原始数据
                        //目标节点不存在，直接新增
                       
                        editorModel.updateComponent(over.id,active.id,-1,{justDisplay:justDisplay})
                    }else{//非左侧拖入的原始数据
                
                    }
            
                }
            }
            // const {over,active} = event
            // console.log("我抓的节点||:",active)
            // console.log("我的目标节点||:",over)
            // // if(over?.id===active.id){
            // //     return
            // // }
            // const overParentId = over.data.current.parentId  //目标的容器
            // const activeParentId = active.data.current.parentId //抓的节点的容器
            //
            // const overIndex = over.data.current.sortable?.index//插入目标的容器的下标
            // const activeIndex = active.data.current.sortable?.index//抓的节点的下标
            //
            // const justDisplay = !!state.components.find(comp=>comp.type === active.id)  //我抓的节点是否是展示的原始数据
            //
            // if(overParentId === activeParentId){
            //     //在同一个容器内
            //     editorModel.updateComponent(overParentId,active.id,overIndex,{justDisplay:justDisplay})
            // }else{
            //     //不在同一个容器内
            // }
        },
        handleDragOverEvent(state,event:DragOverEvent){
            const {over,active} = event
            console.log("我抓的节点:",active)
            console.log("我的目标节点:",over)
            if(over){
                //目标节点存在
                const parentId = over.data.current.parentId
                if(parentId){
                
                }else{
                    //目标没有父亲节点说明是页面
                    const justDisplay = active.data.current.justDisplay //我抓的节点是否是展示的原始数据
                    if(justDisplay){//从左侧拖入对的原始数据
                        //目标节点不存在，直接新增
                        editorModel.addTempComponent(over.id,active.id,{justDisplay:justDisplay})
                    }else{//非左侧拖入的原始数据
                    
                    }
                   
                }
            }else{
                editorModel.removeComponent(active.id)
            }
            
        },
        //（从左侧拉入右侧）新增组件
        // addComponent(state,parentId:UniqueIdentifier,type:ComponentType){
        //     let newComponent = generateComponent(type)
        //     if(newComponent){
        //         const parent = state.schema.schemas.find(page=>page.id === parentId)
        //         if(parent && parent.childrenIds){
        //             parent.childrenIds = parent.childrenIds.concat(newComponent.id)
        //             state.schema.schemas =state.schema.schemas.concat(newComponent)
        //         }
        //     }else{
        //         throw Error("该组件类型不存在")
        //     }
        // },
        addTempComponent(state,parentId:UniqueIdentifier,type:ComponentType,config?:{justDisplay?:boolean}){
            if(config?.justDisplay){
                //需要重新生成对象
                let newComponent = {...generateComponent(type),id:type}
                if(newComponent){
                    const parent = state.schema.schemas.find(page=>page.id === parentId)
                    if(parent && parent.childrenIds){
                        parent.childrenIds = parent.childrenIds.concat(newComponent.id)
                        state.schema.schemas =state.schema.schemas.concat(newComponent)
                    }
                }else{
                    throw Error("该组件类型不存在")
                }
            }
            
        },
        updateComponent(state,parentId:UniqueIdentifier,type:ComponentType,insertIndex:number,config?:{justDisplay?:boolean}){
            console.log(222,parentId,type,insertIndex)
            if(config?.justDisplay){
                //需要重新生成对象
                let newComponent =generateComponent(type)
                if(newComponent){
                    const parent = state.schema.schemas.find(page=>page.id === parentId)
                    if(parent && parent.childrenIds){
                        //先插入
                        //parent.childrenIds.splice(insertIndex,0,newComponent.id)
                        if(insertIndex === -1){
                            parent.childrenIds=parent.childrenIds.concat(newComponent.id)
                        }else{
                            parent.childrenIds.splice(insertIndex,0,newComponent.id)
                        }
                        state.schema.schemas =state.schema.schemas.concat(newComponent)
                        //再删除
                        // parent.childrenIds = parent.childrenIds.filter(id=>id!==type)
                        state.schema.schemas =state.schema.schemas.filter(comp=>comp.id!==type)
                    }
                }else{
                    throw Error("该组件类型不存在")
                }
            }
            
        },
        removeComponent(state,id:UniqueIdentifier){
            let newSchemas = state.schema.schemas
            for (let i=0;i<newSchemas.length;i++){
                console.log(newSchemas)
                if(newSchemas[i].childrenIds ){
                    newSchemas[i].childrenIds =newSchemas.childrenIds.filter(item=>item!==id)
                }
            }
            newSchemas = newSchemas.filter(schema=>schema.id!==id)
            state.schema.schemas=newSchemas
        }
    },
    computed:{
    }
})