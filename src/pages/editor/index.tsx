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
    DragStartEvent, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors
} from "@dnd-kit/core";
import React, {useState} from "react";
import {restrictToWindowEdges} from "@dnd-kit/modifiers";
import {editorModel} from "@/models/editorModel";
import {createPortal} from "react-dom";
import Draggable from "@/pages/editor/Draggable";

const EditorPage = () => {
    
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250,
            tolerance: 5,
        },
    });
    const mouseSensor = useSensor(MouseSensor,{
        activationConstraint: {
            delay: 250,
            tolerance: 5,
        },
    });
    const keyboardSensor = useSensor(KeyboardSensor);
    const sensors = useSensors(touchSensor, mouseSensor, keyboardSensor);
    const onDragEnd=(event:DragEndEvent)=>{
        //console.log("--------onDragEnd:event",event)
        editorModel.updateComponentListVisible(true)
        editorModel.updateDraggedId(null)
        editorModel.handleDragEndEvent(event)
    }
    const onDragStart=(event:DragStartEvent)=>{
        editorModel.updateDraggedId(event.active.id as string)
        //console.log("--------onDragStart:event",event)
        
    }
    const onDragMove=(event:DragMoveEvent)=>{
        editorModel.updateComponentListVisible(false)
        //console.log("--------onDragMove:event",event)
    }
    const onDragCancel=(event:DragCancelEvent)=>{
        editorModel.updateComponentListVisible(true)
        editorModel.updateDraggedId(null)
        //console.log("--------onDragCancel:event",event)
    }
    const onDragOver=(event:DragOverEvent)=>{
       
        console.log("onDragOver:event",event)
    }
    return(
        <DndContext
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            onDragMove={onDragMove}
            onDragCancel={onDragCancel}
            //onDragOver={onDragOver}
            //modifiers={[restrictToWindowEdges]}
            modifiers={[restrictToWindowEdges]}
            sensors={sensors}
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