import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ItemsContext, LogInContext } from './components/ItemList/Provider/Provider';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Fonts from './assets/Fonts';
import MainNavigator from './components/MainNavigator';
import { Provider } from 'react-redux';
import store from './store'

export default function App() {

  const [toLocationList, setToLocationList] = useState([]);

  const [loaded] = useFonts(Fonts);
  if (!loaded) return <AppLoading />

  return (
    <ItemsContext.Provider value={[toLocationList, setToLocationList]}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
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
