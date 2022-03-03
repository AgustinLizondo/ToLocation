import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ItemsContext, LogInContext } from './components/ItemList/Provider/Provider';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Fonts from './assets/Fonts';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './components/MainNavigator';

export default function App() {
  const [toLocationList, setToLocationList] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  const [loaded] = useFonts(Fonts);
  if (!loaded) return <AppLoading />

  return (
    <ItemsContext.Provider value={[toLocationList, setToLocationList]}>
      <LogInContext.Provider value={[isLogged, setIsLogged]}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer >
      </LogInContext.Provider>
    </ItemsContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 64
  },
});
