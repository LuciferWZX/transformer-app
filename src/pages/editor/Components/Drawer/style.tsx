import styled from "styled-components";
import {Collapse, Drawer} from "antd";

export const ComponentDrawerBox = styled(Drawer)`
    position: absolute;
    .ant-drawer-body{
        padding: 0;
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
`