import styled from "styled-components";

export const Navigate = styled.div`

    .navigate{
        display: flex;
        align-items: center;
        gap: 12px;
    }

    & p:hover{
            color: #bbb8b8ff;
            cursor: pointer;
        }
`

export const Task = styled.div`

        display: flex;
        gap: 102px;
    & h1{
        font-weight: 700;
        font-size: 64px;
        line-height: 110%;
        padding-bottom: 36px;
        padding-top: 15px;
    }

    .task1{
        width: 530px;
        height: 255px;
        background: #f2f2f2;
        border-radius: 15px;
        margin-bottom: 20px;

        & p{
            font-weight: 700;
            font-size: 64px;
            line-height: 110%;
            padding: 32px;
        }

       .task2{
            font-weight: 500;
            font-size: 20px;
            line-height: 150%;
            color: #454545;
            padding-top: 51px;
       }
    }

    .text_p{
        
        & p{
            padding-bottom: 25px;
            font-weight: 500;
            font-size: 20px;
            line-height: 150%;
            padding-top: 17px;
        }
    }

`