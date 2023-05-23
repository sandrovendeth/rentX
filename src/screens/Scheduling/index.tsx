import React, { useState } from "react";
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, DayProps, generateInterval, MarkedDatesProps} from "../../components/Calendar";

import { CarDTO } from "../../dtos/CarDTO";
import ArrowSvg from '../../assets/arrow.svg'
import { format, parseISO } from "date-fns";

import { 
    Container, 
    Header, 
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    View,
    Content,
    Footer,
} from "./styles";

interface Params {
  car: CarDTO
}

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

export function Scheduling() {

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDate, setMarkedDate] = useState<MarkedDatesProps>({} as MarkedDatesProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const theme = useTheme();
  const navigation = useNavigation<any>(); /* criação da navegação entre as screens, deve ser cria a função a baixo e passar ela no button desejado */
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental(){
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDate)
      });
  }
  function handleBack(){
    navigation.goBack();
}

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp){
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDate(interval);

    const firstDate = Object.keys(interval) [0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(parseISO(firstDate), 'dd/MM/yyyy'),
      endFormatted: format(parseISO(endDate), 'dd/MM/yyyy'),
    })
  }
  return (
    <Container>
      <Header>
        <StatusBar 
           barStyle="light-content"
           translucent
           backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <View selected={!!rentalPeriod.startFormatted}>
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </View>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <View selected={!!rentalPeriod.endFormatted}>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
            </View>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar 
          markedDates={markedDate}
          onDayPress={handleChangeDate}
        />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} enabled={!!rentalPeriod.startFormatted}/>
      </Footer>
    </Container>
  );
}
