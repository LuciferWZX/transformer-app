import React, {FC} from "react";
import {StyledPage} from "./style";
import {PageSchema} from "@/models/editorModelType";
import {DragOverlay, UniqueIdentifier, useDroppable} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import {editorModel} from "@/models/editorModel";
import {renderSchema} from "@/utils/render";
import {SortableItem} from "@/components";
import {snapCenterToCursor} from "@dnd-kit/modifiers";
import {DraggableItemBox} from "@/pages/editor/Components/Drawer/style";
import IconFont from "../icon-font";
import {useModel} from "foca";

interface IProps extends PageSchema{
    childrenIds:UniqueIdentifier[]
}
const Page:FC<IProps> = (props) => {
    const {id,childrenIds}=props
    const draggedId = useModel(editorModel,state => state.draggedId)
    const {setNodeRef,isOver} = useDroppable({
        id: id,
        data:{
            inCanvas:true,
            isPage:true
        }
    });
    const style = {
        //backgroundColor: isOver ? 'orange' : undefined,
    };
    const render=(id:UniqueIdentifier):React.ReactNode=>{
        const schema = editorModel.findComponentById(id)
       
        if(schema){
            return renderSchema(schema)
        }
        return null
    }
    const renderDraggedItem=()=>{
        const schema = editorModel.findComponentById(id)
        if(draggedId&&childrenIds.includes(draggedId)&&schema){
            
            return(
                <DraggableItemBox>
                    <IconFont iconName={schema.icon}/>{schema.name}
                </DraggableItemBox>
            )
        }
        return null
    }
    return(
        <StyledPage ref={setNodeRef} style={style} isOver={isOver}>
            <SortableContext
                items={childrenIds}
                strategy={verticalListSortingStrategy}
            >
                {childrenIds.map(id => {
                    return (
                        <SortableItem key={id} id={id}>
                            {render(id)}
                        </SortableItem>
                    )
                })}
               
            </SortableContext>
        </StyledPage>
    )
}
export default Page