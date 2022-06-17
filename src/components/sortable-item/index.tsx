import { useSortable } from "@dnd-kit/sortable";
import React, {FC} from "react";
import {CSS} from '@dnd-kit/utilities';
import {UniqueIdentifier} from "@dnd-kit/core";
import {SortableItemBox} from "@/components/sortable-item/style";
import {LineItemBox} from "./style";
import {SortableTransition} from "@dnd-kit/sortable/dist/hooks/types";
interface IProps{
    children?:React.ReactNode
    id:UniqueIdentifier
    draggedStyled?:'horizon-line',
    parentId:UniqueIdentifier|null
    inCanvas?:boolean
    disabledSort?:boolean
    disabledWhenDrag?:boolean
}
const SortableItem:FC<IProps> = (props) => {
    const {children,id,disabledWhenDrag,parentId,inCanvas,disabledSort}=props
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
        disabled:disabledWhenDrag,
        data:{
            parentId:parentId,
            inCanvas:inCanvas
        }
    });
    
    const style = {
        transform: disabledSort?undefined:CSS.Transform.toString(transform),
        //transition,
    };

    return (
        <SortableItemBox ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </SortableItemBox>
    );
}
export default SortableItem