import {IconName} from "@/types/icon";
import {TextInputSchema} from "@/components/text-input";
import {UniqueIdentifier} from "@dnd-kit/core";

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
    id:UniqueIdentifier
    type:ComponentType
    name:string
    parentId?:string
    childrenIds:UniqueIdentifier[]|null
    icon?:IconName
}
//页面schema
export interface PageSchema extends BaseSchema{
    config:null
}
//schema类型
export type SchemaType = PageSchema
    |TextInputSchema
//全部的schema
export interface GlobalSchema{
    config:null,
    schemas:SchemaType[]
}