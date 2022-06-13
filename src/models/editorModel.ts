import {defineModel} from "foca";
import {ComponentItem} from "@/models/editorModelType";
import {IconName} from "@/types/icon";

export interface EditorModelState{
    components:ComponentItem
    componentListVisible:boolean
}
const initialState:EditorModelState={
    components:{
        "DataEntry":{
          name:'数据录入',
          children:[{
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
          }]
        },
        "Container": {
          name:"容器",
            children:[]
        }
    },
    componentListVisible:true
}

export const editorModel = defineModel('editor',{
    initialState,
    events:{
        onInit(){
            console.log("初始化编辑器model")
        },
     
    },
    effects:{
    
    },
    actions:{
        //更新组件列表的visible
        updateComponentListVisible(state,visible:boolean){
            state.componentListVisible = visible
        }
    },
    computed:{
    
    }
})