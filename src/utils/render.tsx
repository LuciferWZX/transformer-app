import {PageSchema, SchemaType} from "@/models/editorModelType";
import React from "react";
import {Page} from "@/components";
import TextInput from "@/components/text-input";

/***
 * 渲染schema
 * @param schema
 */
const renderSchema=(schema:SchemaType):React.ReactNode=>{
    switch (schema.type) {
        case "Page":{
            return (
                <Page  {...schema as PageSchema} childrenIds={schema.childrenIds??[]}/>
            )
        }
        case "Input":{
            return (
                <TextInput {...schema}/>
            )
        }
        default:{
            return null
        }
    }
}
export {
    renderSchema
}