import {FC} from "react";
import {Input} from "antd";
import {StyledTextInput} from "./style";
import {BaseSchema} from "../../models/editorModelType";

export interface TextInputType extends BaseSchema{

}
const TextInput:FC<TextInputType> = (props) => {
    return(
        <StyledTextInput>
            <Input />
        </StyledTextInput>
    )
}
export default TextInput