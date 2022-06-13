import { Modal } from "antd";
import styled from "styled-components";

export const ModalBox = styled(Modal)`
    .ant-modal-header{
        border-bottom: 0;
        padding: 20px 48px 16px 24px;
    }
    .ant-modal-footer{
        border-top: 0;
    }
    .ant-modal-close{
        font-size: 24px;
        width: 24px;
        height: 24px;
        right: 16px;
        top: 20px;
        .ant-modal-close-x{
            font-size: 24px;
            width: 24px;
            height: 24px;
            line-height: 24px;
        }
    }
    
`
export const IconTitle = styled.div`
    font-size: 14px;
    display: flex;
    .modal-title-leading{
        font-size: 20px;
        margin-right: 10px;
        
    }
    .warning{
        color: rgba(250, 140, 22, 1);
    }
    .modal-title{
        flex: 1;
    }
`
export const SearchBarBox = styled.div`
    height: 40px;
    padding: 8px;
`