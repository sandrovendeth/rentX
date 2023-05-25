import React from 'react';

import LottieView from 'lottie-react-native';

import loadCar from '../../assets/loadCar.json'

import {
    Container
} from './styles';

export function LoadAnimation() {
 return (
    <Container>
        <LottieView 
            source={loadCar}
            style={{height:200}}
            autoPlay
            resizeMode='contain'
            loop
        />
    </Container>
 );
}