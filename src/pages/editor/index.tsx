import {EditorCenter, EditorPageBox} from "@/pages/editor/style";
import { DragDropContext } from 'react-beautiful-dnd';
import Components from "@/pages/editor/Components";
import Canvas from "@/pages/editor/Canvas";
import Dashboard from "@/pages/editor/Dashboard";
import Attribute from "@/pages/editor/Attribute";
import ComponentDrawer from "@/pages/editor/Components/Drawer";

const EditorPage = () => {
    const onBeforeCapture=()=>{
        console.log("onBeforeCapture")
    }
    const onBeforeDragStart=()=>{
        console.log("onBeforeDragStart")
    }
    const onDragStart=()=>{
        console.log("onDragStart")
    }
    const onDragUpdate=()=>{
        console.log("onDragUpdate")
    }
    const onDragEnd=()=>{
        console.log("onDragEnd")
    }
    return(
        <DragDropContext
            onBeforeCapture={onBeforeCapture}
            onBeforeDragStart={onBeforeDragStart}
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
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
        </DragDropContext>
    )
}
export default EditorPage