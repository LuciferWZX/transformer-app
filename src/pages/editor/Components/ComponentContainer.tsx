import React, {FC} from "react";
import {ComponentContainerBox} from "@/pages/editor/Components/style";
import {Draggable, Droppable} from "react-beautiful-dnd";
interface IProps{
    data:Array<{id:string,name:string}>
}
const ComponentContainer:FC<IProps> = ({data}) => {

    return(
        <Droppable droppableId="droppable">
            {(provided, snapshot) => (
               <div
                   ref={provided.innerRef}>
                   <ComponentContainerBox>
                       <div>容器</div>
                       <div className={'grid-layout'}>
                           {data.map((item,index)=>{
                               return(
                                   <Draggable
                                       key={item.id}
                                       draggableId={item.id}
                                       index={index}>
                                       {(_provided, _snapshot) => (
                                           <div
                                               className={'container-card'}
                                               ref={_provided.innerRef}
                                               {..._provided.draggableProps}
                                               {..._provided.dragHandleProps}
                                           >
                                               <div>{item.id}</div>
                                               <div>{item.name}</div>
                                           </div>
                                       )}
                                   </Draggable>
                               )
                           })}
                       </div>
                   </ComponentContainerBox>
                   {provided.placeholder}
               </div>
            )}
        </Droppable>
        
    )
}
export default ComponentContainer