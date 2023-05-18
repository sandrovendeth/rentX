import React from 'react';
import * as Splashscreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import { 
      useFonts,
      Inter_400Regular,
      Inter_500Medium
} from '@expo-google-fonts/inter'
import { 
      Archivo_400Regular,
      Archivo_500Medium,
      Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import { CarDetails } from './src/screens/CarDetails';
import theme from './src/styles/theme';




export default function App() {
  Splashscreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });
  if(!fontsLoaded){
    return null
  }

  Splashscreen.hideAsync();
  return (
  <ThemeProvider theme={theme}>
    <CarDetails />
  </ThemeProvider>
  )
}
