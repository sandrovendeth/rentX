import React from 'react';

import {
    Container,
    Header,
    CarImages
} from './styles';
import { BackButton } from '../../components/BackButton';

import { ImageSlider } from '../../components/ImageSlider';


export function CarDetails() {
 return (
    <Container>
        <Header>
           <BackButton onPress={() =>{}} />
            
        </Header>

        <CarImages>
            <ImageSlider 
            imagesUrl={['https://production.autoforce.com/uploads/version/profile_image/6737/comprar-tiptronic_13d79f3c1b.png']} 
            />
        </CarImages>
    </Container>
 );
}