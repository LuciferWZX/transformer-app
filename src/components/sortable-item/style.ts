import styled, {css} from "styled-components";

export const SortableItemBox = styled.div<{isDragging:boolean}>`
    position: relative;
    :before{
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1;
    }
    ${({isDragging})=>{
        if(isDragging){
            return css`
                height: 2px;
                overflow: hidden;
                :before{
                    content: "";
                    display: inline-block;
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    z-index: 1;
                    background-color: #2f54eb;
                    
                }
            `
        }
    }}
`