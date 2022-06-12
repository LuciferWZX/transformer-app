import styled from "styled-components";

export const ComponentsBox = styled.div`
    width: 200px;
    height: 100%;
`

export const ComponentContainerBox = styled.div`
    .grid-layout{
        display: grid;
        grid-template-columns: repeat(3,1fr);
    }
    .container-card{
        height: 68px;
        border:1px solid orange;
    }
`