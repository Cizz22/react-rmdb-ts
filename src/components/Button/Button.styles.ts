import styled from 'styled-components'

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: none;
    color: var(--white);
    margin: 20px auto;
    transition: all 0.3;
    outline: none;
    cursor: pointer;
    font-size: var(--fontMd);

    :hover{
        opacity: 0.8;
    }
`;