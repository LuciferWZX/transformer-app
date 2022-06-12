import React, {FC} from "react";
import {ComponentsBox} from "@/pages/editor/Components/style";

import ComponentContainer from "@/pages/editor/Components/ComponentContainer";
interface IProps{
    style?:React.CSSProperties
    
}
const Components:FC<IProps> = (props) => {
    const {style}=props
    let data:any ={
        "container":{
            name:"容器",
            components: [
                {id:"1", name:"输入框"},
                {id:"2", name:"按钮"},
                {id:"3", name:"多选框"},
                {id:"4", name:"图片"},
            ]
        }
    };
    let order = ["container"]
    return(
        <ComponentsBox
            style={style}
        >
            {order.map(item=>{
                const components = data[item].components
                return (
                    <ComponentContainer key={item} data={components} />
                )
            })}
        </ComponentsBox>
    )
}
export default Components