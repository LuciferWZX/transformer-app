import {IconName} from "@/types/icon";

export interface ComponentContainer{
    type:ComponentKind
    name:string,
}
export interface BaseCollectionType{
    type:ComponentType
    name:string
    kind:ComponentKind
    icon?:IconName
}
//组件的种类
export type ComponentKind = "Container"|"DataEntry"
//组件的类型
export type ComponentType = "Input"|"NumberInput"|"PasswordInput"|"TextareaInput"|"Page"
export type ComponentCollectionType =
    InputCollectionType
    |PasswordInputCollectionType
    |TextareaInputCollectionType
    |NumberInputCollectionType
export interface InputCollectionType extends BaseCollectionType{

}
export interface PasswordInputCollectionType extends InputCollectionType{

}
export interface TextareaInputCollectionType extends InputCollectionType{

}
export interface NumberInputCollectionType extends BaseCollectionType{

}
//基础的schema类型
export interface BaseSchema {
    id:string,
    type:ComponentType,
    parentId?:string
    childrenIds:string[]
}
//页面schema
export interface PageSchema extends BaseSchema{
    config:null
}
//全部的schema
export interface GlobalSchema{
    config:null,
    schemas:PageSchema[]
}