import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ItemList from './components/ItemList/ItemList';
import { ItemsContext, LogInContext } from './components/ItemList/Provider/Provider';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Fonts from './assets/Fonts';
import WelcomeGuest from './components/WelcomeGuest';

export default function App() {
  const [toLocationList, setToLocationList] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  const [loaded] = useFonts(Fonts);
  if (!loaded) return <AppLoading />

  return (
    <ItemsContext.Provider value={[toLocationList, setToLocationList]}>
      <LogInContext.Provider value={[isLogged, setIsLogged]}>
        <View style={styles.container}>
          {isLogged
            ? <ItemList />
            : <WelcomeGuest />
          }
        </View>
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
