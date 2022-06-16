import { useSortable } from "@dnd-kit/sortable";
import React, {FC} from "react";
import {CSS} from '@dnd-kit/utilities';
import {UniqueIdentifier} from "@dnd-kit/core";
import {SortableItemBox} from "@/components/sortable-item/style";
import {LineItemBox} from "./style";
interface IProps{
    children?:React.ReactNode
    id:UniqueIdentifier
    draggedStyled?:'horizon-line',
    parentId:UniqueIdentifier
    inCanvas?:boolean
}
const SortableItem:FC<IProps> = (props) => {
    const {children,id,draggedStyled,parentId,inCanvas}=props
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isOver,
        isDragging,
    } = useSortable({
        id: id,
        data:{
            parentId:parentId,
            inCanvas:inCanvas
        }
    });
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    if (isDragging){
        if(!draggedStyled ||draggedStyled === "horizon-line"){
            return (
                <LineItemBox ref={setNodeRef} style={style} {...attributes} {...listeners}/>
            )
        }

    }
    return (
        <SortableItemBox ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </SortableItemBox>
    );
}
export default SortableItem