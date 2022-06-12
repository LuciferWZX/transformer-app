import {CanvasBox} from "@/pages/editor/Canvas/style";

const Canvas = () => {
  return(
      <CanvasBox>
          {/*<Droppable droppableId="droppable2" direction={"horizontal"}>*/}
          {/*    {(provided, snapshot) => (*/}
          {/*        <div*/}
          {/*            ref={provided.innerRef}*/}
          {/*            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}>*/}
          {/*            <Draggable*/}
          {/*                key={"2"}*/}
          {/*                draggableId={"2"}*/}
          {/*                index={1}>*/}
          {/*                {(provided, snapshot) => (*/}
          {/*                    <div*/}
          {/*                        ref={provided.innerRef}*/}
          {/*                        {...provided.draggableProps}*/}
          {/*                        {...provided.dragHandleProps}*/}
          {/*                        style={{ backgroundColor: snapshot.isDragging ? 'blue' : 'grey' }}>*/}
          {/*                        "aaa"*/}
          {/*                    </div>*/}
          {/*                )}*/}
          {/*            </Draggable>*/}
          {/*            {provided.placeholder}*/}
          {/*        </div>*/}
          {/*    )}*/}
          {/*</Droppable>*/}
      </CanvasBox>
  )
}
export default Canvas