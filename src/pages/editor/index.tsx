import {EditorCenter, EditorPageBox} from "@/pages/editor/style";
import Canvas from "@/pages/editor/Canvas";
import Dashboard from "@/pages/editor/Dashboard";
import Attribute from "@/pages/editor/Attribute";
import ComponentDrawer from "@/pages/editor/Components/Drawer";
import {
    closestCenter,
    closestCorners, defaultAnnouncements,
    DndContext,
    DragCancelEvent,
    DragEndEvent,
    DragMoveEvent,
    DragOverEvent,
    DragOverlay,
    DragStartEvent,
    KeyboardSensor,
    MeasuringStrategy,
    MouseSensor,
    PointerSensor,
    rectIntersection,
    TouchSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import React, {useState} from "react";
import {restrictToWindowEdges} from "@dnd-kit/modifiers";
import {editorModel} from "@/models/editorModel";
import {createPortal} from "react-dom";
import Draggable from "@/pages/editor/Draggable";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const EditorPage = () => {
    
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250,
            tolerance: 5,
        },
    });
    const pointerSensor = useSensor(PointerSensor);
    const mouseSensor = useSensor(MouseSensor,{
        
        activationConstraint: {
            delay: 250,
            tolerance: 5
        },
    });
    const keyboardSensor = useSensor(KeyboardSensor,{
        coordinateGetter: sortableKeyboardCoordinates,
    });
    
    const sensors = useSensors(touchSensor, mouseSensor, keyboardSensor,pointerSensor);
    const onDragEnd=(event:DragEndEvent)=>{
        //console.log("End:", {active:event.active,over:event.over})
        editorModel.updateComponentListVisible(true)
        editorModel.updateDraggedId(null)
    }
    const onDragStart=(event:DragStartEvent)=>{
        editorModel.updateDraggedId(event.active.id as string)
        editorModel.updateComponentListVisible(false)
        //console.log("Start:",event)
        
    }

    const onDragOver=(event:DragOverEvent)=>{
       
        const {active, over,} = event;
        if(over?.id === active.id){
            return
        }

        console.log("over:", {active:event.active,over:event.over?.id})
        editorModel.updateOverId(event.over?.id)
    }
    return(
        <DndContext
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            collisionDetection={rectIntersection}
            accessibility={{
                announcements:defaultAnnouncements,
            }}
            sensors={sensors}
        >
            <EditorPageBox>
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