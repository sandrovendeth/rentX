import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { api } from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList
} from './styles';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();


  function handleCarDetails (car: CarDTO) {
    navigation.navigate('CarDetails', { car })
    
  }

  useEffect(() => { /* useEffect no qual sempre que a tela home seja aberta iremos buscar na api as informações dos carros cadastrados */
    async function fetchCars() {  
      try {
        const response = await api.get('/cars');
        setCars(response.data);

      } catch (error) {
          console.log(error)
      } finally {
          setLoading(false)
      }
    }

    fetchCars();
  }, []);
  
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
        { loading ? <Load /> :
          <CarList 
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)}/>}
        />
        }
        
    </ Container>
    
 );
}