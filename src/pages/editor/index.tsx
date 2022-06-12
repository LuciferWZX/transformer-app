import {EditorPageBox} from "@/pages/editor/style";
import { DragDropContext } from 'react-beautiful-dnd';
import Components from "@/pages/editor/Components";
import Canvas from "@/pages/editor/Canvas";
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
                <Components/>
                <Canvas/>
            </EditorPageBox>
        </DragDropContext>
    )
}
export default EditorPage