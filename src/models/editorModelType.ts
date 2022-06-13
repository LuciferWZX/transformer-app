import {IconName} from "@/types/icon";

export interface ComponentItem{
   [key:ComponentKind]:{
       name:string,
       children:SchemaType[]
   }
}
export interface BaseSchema{
    type:ComponentType
    name:string
    kind:ComponentKind
    icon?:IconName
}
//组件的种类
export type ComponentKind = "Container"|"DataEntry"
//组件的类型
export type ComponentType = "Input"|"NumberInput"|"PasswordInput"|"TextareaInput"
export type SchemaType = InputType|TextareaInputType|PasswordInputType|NumberInputType
export interface InputType extends BaseSchema{
    value?:string,
    defaultValue?:string
}
export interface PasswordInputType extends InputType{
    isShow?:boolean
}
export interface TextareaInputType extends InputType{

}
export interface NumberInputType extends BaseSchema{
    value?:number,
    defaultValue?:number
}