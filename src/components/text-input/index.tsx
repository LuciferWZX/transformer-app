import {FC} from "react";
import {Input} from "antd";
import {StyledTextInput} from "./style";
import {BaseSchema} from "@/models/editorModelType";
import {IconName} from "@/types/icon";

export interface TextInputSchema extends BaseSchema{

}
const TextInput:FC<TextInputSchema> = (props) => {
    return(
        <StyledTextInput>
            <Input />
        </StyledTextInput>
    )
}
export default TextInput