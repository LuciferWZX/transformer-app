import styled, {css} from "styled-components";

export const StyledPage = styled.div<{isOver:boolean}>`
    height: 100%;
    ${({isOver})=>{
        if(isOver){
            return css`
                position: relative;
                background-color:rgba(55, 97, 226, 0.1);
                :before{
                    content: "";
                    display: inline-block;
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    border: 2px solid #3761E2;
                    z-index: 1;
                }
            `
        }
    }}
`