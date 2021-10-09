import React from 'react';
import { Wrapper,Image } from './Actors.styles';

type Props = {
    name:string;
    character:string;
    imagesUrl: string
}


const Actors:React.FC<Props> = ({name, character, imagesUrl}) => (
    <Wrapper>
        <Image src={imagesUrl}/>
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
)

export default Actors