import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ItemList from './components/ItemList/ItemList';
import { ItemsContext, LogInContext } from './components/ItemList/Provider/Provider';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Fonts from './assets/Fonts';
import WelcomeGuest from './components/WelcomeGuest';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [toLocationList, setToLocationList] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  const [loaded] = useFonts(Fonts);
  if (!loaded) return <AppLoading />

  return (
    <ItemsContext.Provider value={[toLocationList, setToLocationList]}>
      <LogInContext.Provider value={[isLogged, setIsLogged]}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={isLogged
            ? 'HomeScreen'
            : 'WelcomeScreen'
          }
          >
            <Stack.Screen
            options={{
              headerShown: false
            }}
            name='WelcomeScreen' component={WelcomeGuest} />
            <Stack.Screen
            options={{
              headerShown: false
            }}
            name='HomeScreen' component={ItemList} />
          </Stack.Navigator>
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
