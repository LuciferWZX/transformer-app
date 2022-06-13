import styled from "styled-components";

export const LoginLayoutBox = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`
export const ImageBox = styled.div`
    flex: 1.5;
    text-align: center;
    background-color:#F7F9FC;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title-box{
    
    }
    .vite-logo{
        width: 100px;
        height: 100px;
    }
    .img-tip{
        font-size: 24px;
        color: #494b83;
        font-weight: 200;
    }
`
export const OutletBox = styled.div`
    flex:1;
    text-align: center;
`
export const Keyword = styled.span`
    font-weight: 600;
    font-size: 24px;
    color: #494b83;
`