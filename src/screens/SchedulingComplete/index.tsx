import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import { ConfirmButton } from '../../components/ConfirmButton';


import {
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';


export function SchedulingComplete() {
    const navigation = useNavigation<any>(); /* criação da navegação entre as screens, deve ser cria a função a baixo e passar ela no button desejado */

  function handleConfirmRental(){
      navigation.navigate('Home')
  }

    const { width } = useWindowDimensions();
 return (
    <Container>
        <StatusBar 
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
        
        />
        <LogoSvg width={width} />

        <Content>
            <DoneSvg width={80} height={90}/>
            <Title>Carro alugado!</Title>

            <Message>
                Agora você só precisar ir {'\n'}
                até a concessionária da RENTX {'\n'}
                pegar o seu automóvel.
            </Message>
        </Content>

        <Footer>
            <ConfirmButton title='OK' onPress={handleConfirmRental}/>
        </Footer>
    </Container>
 );
}