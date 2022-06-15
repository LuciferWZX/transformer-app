import React, {FC} from "react";
import {BoardBox} from "@/pages/editor/Canvas/board/style";
import { useModel} from "foca";
import {editorModel} from "@/models/editorModel";
import {renderSchema} from "@/utils/render";

const Board:FC = () => {
    const page=useModel(editorModel,state => {
        return state.schema.schemas.find(schema=>schema.id === state.currentPageId)
    })

    
    return(
       
        <BoardBox >
            {page&&renderSchema(page)}
        </BoardBox>
    )
}
export default Board