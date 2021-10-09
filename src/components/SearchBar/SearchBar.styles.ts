import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;


export const Content = styled.div`
    position:relative;
    max-width: var(--maxWidth);
    width: 100%;
    background: var(--medGrey);
    height: 55px;
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img{
        position: absolute;
        left:15px;
        top: 14px;
        width: 30px;
    }

    input{
        width: 95%;
        margin: 8px 0;
        height: 40px;
        background: transparent;
        color: var(--white);
        font-size: 28px;
        padding: 0 0 0 60px;
        border: none;
        left: 0px;

        :focus{
            outline: none;
        }
    }
`;