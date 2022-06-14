import {defineModel} from "foca";
import {ComponentContainer, SchemaType} from "@/models/editorModelType";
import {IconName} from "@/types/icon";

export interface EditorModelState{
    components:SchemaType[]
    componentsContainer:ComponentContainer[]
    componentListVisible:boolean
    draggedId:string|null
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
    draggedId:null
}

export const editorModel = defineModel('editor',{
    initialState,
    events:{
        onInit(){
            console.log("初始化编辑器model")
        }
    },
    effects:{
    
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
        updateComponents(state,components:SchemaType[]){
            state.components = components
        }
    },
    computed:{
        getDraggedItem(){
            //console.log(111,this.state.draggedId)
            console.log(111,this.state.draggedId)
            console.log(222,this.state)
            return null
            //return this.state.components.find(component=>component.type === this.state.draggedId)
        }
    }
})