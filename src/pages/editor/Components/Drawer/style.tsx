import styled, {css} from "styled-components";
import {Collapse} from "antd";

export const ComponentDrawerBox = styled.div<{visible:boolean}>`
    position: absolute;
    width: 217px;
    height: 100%;
    background-color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    transition-duration: 0.2s;
    transition-property: width;
    ${({visible})=>{
        if(!visible){
            return css`
                width: 0;
                overflow: hidden;
            `
        }
    }};
    .support-box{
      width: 217px;
    }
`
export const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 8px;
    .draw-title{
        font-weight: 500;
        font-size: 12px;
    }
    .modal-close{
        font-size: 24px;
        cursor: pointer;
    }
`
export const CollapseBox = styled(Collapse)`
    .ant-collapse-header{
        height: 28px;
        padding: 4px 0 4px 8px!important;
    }
    .ant-collapse-content-box{
        padding: 0!important;
        background-color: white;
    }
    .ant-collapse-item{
        border-bottom: 0!important;
    }
`
export const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    background-color: rgba(247, 247, 247, 1);
    gap: 1px;
    padding: 1px;
`
