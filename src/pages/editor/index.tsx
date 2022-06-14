import {EditorCenter, EditorPageBox} from "@/pages/editor/style";
import Canvas from "@/pages/editor/Canvas";
import Dashboard from "@/pages/editor/Dashboard";
import Attribute from "@/pages/editor/Attribute";
import ComponentDrawer from "@/pages/editor/Components/Drawer";
import {
    DndContext,
    DragCancelEvent,
    DragEndEvent,
    DragMoveEvent,
    DragOverEvent,
    DragOverlay,
    DragStartEvent
} from "@dnd-kit/core";
import React, {useState} from "react";
import {restrictToWindowEdges} from "@dnd-kit/modifiers";
import {editorModel} from "@/models/editorModel";
import {createPortal} from "react-dom";
import Draggable from "@/pages/editor/Draggable";

const EditorPage = () => {
    // const [items] = useState(['1', '2', '3', '4', '5']);
    // const [activeId, setActiveId] = useState(null);
    const onDragEnd=(event:DragEndEvent)=>{
        editorModel.updateComponentListVisible(true)
        editorModel.updateDraggedId(null)
        console.log("onDragEnd:event",event)
        // setActiveId(null);
    }
    const onDragStart=(event:DragStartEvent)=>{
        editorModel.updateComponentListVisible(false)
        editorModel.updateDraggedId(event.active.id as string)
        console.log("onDragStart:event",event)
        // setActiveId(event.active.id);
    }
    const onDragMove=(event:DragMoveEvent)=>{
        console.log("onDragMove:event",event)
    }
    const onDragCancel=(event:DragCancelEvent)=>{
        editorModel.updateComponentListVisible(true)
        editorModel.updateDraggedId(null)
        console.log("onDragCancel:event",event)
    }
    const onDragOver=(event:DragOverEvent)=>{
       
        console.log("onDragOver:event",event)
    }
    return(
        <DndContext
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            //onDragMove={onDragMove}
            onDragCancel={onDragCancel}
            //onDragOver={onDragOver}
            modifiers={[restrictToWindowEdges]}
        >
            <EditorPageBox>
                {/*<div>*/}
                {/*    {items.map(id =>*/}
                {/*        <Draggable key={id} id={id}>*/}
                {/*            `Item ${id}`*/}
                {/*        </Draggable>*/}
                {/*    )}*/}
                {/*</div>*/}
                
                {/*<DragOverlay dropAnimation={null}>*/}
                {/*    {activeId ? (*/}
                {/*        <div>`Item ${activeId}`</div>*/}
                {/*    ): null}*/}
                {/*</DragOverlay>*/}
                <Dashboard/>
                <EditorCenter>
                    {/*<Components/>*/}
                    <ComponentDrawer/>
                    <Canvas/>
                </EditorCenter>
                
                <Attribute/>
            </EditorPageBox>
        </DndContext>
    )
}
export default EditorPage