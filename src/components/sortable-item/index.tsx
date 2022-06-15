import { useSortable } from "@dnd-kit/sortable";
import React, {FC} from "react";
import {CSS} from '@dnd-kit/utilities';
import {UniqueIdentifier} from "@dnd-kit/core";
import {SortableItemBox} from "@/components/sortable-item/style";
interface IProps{
    children?:React.ReactNode
    id:UniqueIdentifier
}
const SortableItem:FC<IProps> = (props) => {
    const {children,id}=props
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isOver,
        isDragging
    } = useSortable({
        id: id
    });
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    
    return (
        <SortableItemBox isDragging={isDragging} ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </SortableItemBox>
    );
}
export default SortableItem