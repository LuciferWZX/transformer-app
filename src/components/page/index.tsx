import {FC} from "react";
import {StyledPage} from "./style";
import {PageSchema} from "../../models/editorModelType";
import {useDroppable} from "@dnd-kit/core";


const Page:FC<PageSchema> = (props) => {
    const {id}=props
    const {setNodeRef,isOver} = useDroppable({
        id: id,
    });
    const style = {
        backgroundColor: isOver ? 'orange' : undefined,
    };
    return(
        <StyledPage ref={setNodeRef} style={style}>
            this is page {id}
        </StyledPage>
    )
}
export default Page