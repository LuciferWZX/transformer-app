import styled from "styled-components";

export const LoginBox = styled.div`
    display: inline-block;
    width: 400px;
    padding: 10px;
    text-align: start;
    .error-alert{
        margin-bottom: 10px;
    }
`
export const LoginTitle = styled.div`
    font-size: 14px;
    .big-title{
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
    }
    margin-bottom: 24px;
`
export const AccountLink = styled.span`
`
export const CaptchaBox = styled.div`
    height: 100%;
    border-radius: 4px;
    position: relative;
`
export const HoverCaptchaBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    border-radius: 4px;
    cursor:pointer;
    transition-property:background-color;
    transition-duration:0.2s;
    :hover{
        background-color: rgba(127, 143, 166,0.3);
    }
`