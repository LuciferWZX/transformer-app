import styled from "styled-components";

export const HomeBox = styled.div`
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
`
export const FormTableBox = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    overflow: auto;
    &,
    .art-horizontal-scroll-container {
        ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background: #ccc;
            border: 1px solid #eaeaea;

            &:hover {
                background: #6e6e6e;
            }
        }

        ::-webkit-scrollbar-track {
            background: #eaeaea;
        }
    }
`
export const HomeHeaderBox = styled.div`
    .header-title{
        font-size: 20px;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
    }
`
export const ActionBarBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 16px;
    .action-input{
        max-width: 248px;
    }
    .search-icon{
        color:rgba(196, 196, 196, 1);
    }
`
export const TablePaginationBox = styled.div`
    margin-top: 24px;
    text-align: end;
`