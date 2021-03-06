import styled from 'styled-components'

type Props = {
    image:string
}

export const Wrapper = styled.div<Props>`
    background: linear-gradient(
        to bottom,  
        rgba(0,0,0,0)41%, 
        rgba(0,0,0,0.65) 100%
    ), url(${({image}) => image});;
    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateHeroImage 1s;

    @keyframes animateHeroImage {
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;

`;

export const Text = styled.div`
    position: absolute;
    color: var(--white);
    z-index : 100;
    max-width: 700px;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;

    h1{
        font-size: var(--fontXl);
        
        @media screen and (max-width: 720px){
            font-size: var(--fontLg);
        }
    }
    p{
        font-size: var(--fontMd);

        @media screen and (max-width: 720px){
            font-size: var(--fontSm);
        }
    }

    @media screen and (max-width: 720px){
        max-width: 100%;
    }
`