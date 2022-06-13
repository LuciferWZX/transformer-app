import {ItemCardBox} from "@/components/item-card/style";
import {IconName} from "@/types/icon";
import React, {FC, MouseEventHandler} from "react";
interface IProps{
    children?:React.ReactNode
    icon?:IconName|undefined
    customIcon?:React.ReactNode
    className?:string
    style?:React.CSSProperties
    onClick?:MouseEventHandler<HTMLDivElement>
}
const ItemCard:FC<IProps> = (props) => {
    const {icon,customIcon,style,className,children,onClick}=props
    return(
        <ItemCardBox
            className={className}
            style={style}
            onClick={onClick}>
            <div className={'card-icon'}>
                {customIcon ??<i className={`iconfont ${icon}`}/>}
            </div>
            <div className={'card-text'}>
                {children}
            </div>
        </ItemCardBox>
    )
}
export default ItemCard