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
    const {
        setNodeRef,
        //isOver
    } = useDroppable({
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
        if(draggedId&&childrenIds.includes(draggedId)){
            const draggedSchema = editorModel.findComponentById(draggedId)
            return(
                <DragOverlay modifiers={[snapCenterToCursor]}>
                    {draggedSchema?(
                        <DraggableItemBox >
                            <IconFont iconName={draggedSchema.icon}/>{draggedSchema.name}
                        </DraggableItemBox>
                    ):null}
                </DragOverlay>
            )
        }
        return null
    }
    return(


            <SortableContext
                items={childrenIds}
                strategy={verticalListSortingStrategy}>
                <StyledPage ref={setNodeRef} style={style} isOver={false}>
                    {childrenIds.map(_id => {
                        return (
                            <SortableItem inCanvas={true} parentId={id} key={_id} id={_id}>
                                {render(_id)}
                            </SortableItem>
                        )
                    })}
                    {renderDraggedItem()}
                </StyledPage>
            </SortableContext>


    )
}
export default Page