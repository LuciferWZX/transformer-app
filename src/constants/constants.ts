import {ComponentCollectionType, ComponentContainer} from "@/models/editorModelType";
import {IconName} from "@/types/icon";
//所有组件
const COMPONENTS:ComponentCollectionType[]=[{
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
//所有容器
const CONTAINER:ComponentContainer[]=[
    {type:"Container",name:"容器"},
    {type:"DataEntry",name:"数据录入"},
]
export {
    COMPONENTS,
    CONTAINER
}