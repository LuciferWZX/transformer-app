import {FC} from "react";
import {BoardBox} from "@/pages/editor/Canvas/board/style";
import {useDroppable} from "@dnd-kit/core";


const Board:FC = () => {
    const {setNodeRef,isOver} = useDroppable({
        id: 'unique-id',
    });
    const style = {
        backgroundColor: isOver ? 'orange' : undefined,
    };
    return(
       
        <BoardBox ref={setNodeRef} style={style}>
            Board
            Board
            Board
            Board
            Board
            Board
            Board
            Board
            Board
            Board
            Board
            Board
        </BoardBox>
    )
}
export default Board