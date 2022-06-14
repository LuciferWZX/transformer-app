import {useDraggable} from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities';
import {ItemCard} from "@/components";
import React, {FC} from "react";
import {IconName} from "@/types/icon";
interface IProps{
    id:string
    icon?:IconName|undefined
    children?:React.ReactNode
    style?:React.CSSProperties
}
const DraggableItem:FC<IProps> = (props) => {
    const {id,icon,children}=props
    const {setNodeRef, listeners,attributes,transform,isDragging} = useDraggable({
        id: id,
    });
    const style = {
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 1 : undefined
        
    };
    return(
        <div ref={setNodeRef}  style={{...style,...props.style}} {...listeners} {...attributes}>
            <ItemCard style={{width:'100%'}} icon={icon}>
                {children}
            </ItemCard>
        </div>
    )
}
export default DraggableItem