import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'

import { Car } from '../../components/Car';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CardList
} from './styles';

export function Home() {
  const carData = {  
      brand: 'Audi',
      name: 'RS 5 Coupé',
      rent: {
          period: 'AO DIA',
          price: 120,
      },
      thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/6737/comprar-tiptronic_13d79f3c1b.png',
  }

 return (
    <Container>
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      />
        <Header>
          <HeaderContent>
            <Logo 
              widht={RFValue(108)}
              height={RFValue(12)}
            />
            <TotalCars>
              Total de 12 carros
            </TotalCars>
          </HeaderContent>
        </Header>
        <CardList 
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
        />
    </Container>
 );
}