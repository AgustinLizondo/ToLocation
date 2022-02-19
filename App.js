import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ItemList from './components/ItemList/ItemList';
import { ItemsContext } from './components/ItemList/Provider/Provider';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
// import Fonts from './assets/Fonts';

export default function App() {
  const [toLocationList, setToLocationList] = useState([]);

  const [loaded] = useFonts({
    'Poppins-Black': require('./assets/Fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./assets/Fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('./assets/Fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('./assets/Fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-Thin': require('./assets/Fonts/Poppins-Thin.ttf'),
    'Poppins-SemiBold': require('./assets/Fonts/Poppins-SemiBold.ttf'),
  });
  if (!loaded) return <AppLoading />

  return (
    <ItemsContext.Provider value={[toLocationList, setToLocationList]}>
      <View style={styles.container}>
        <ItemList />
      </View>
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
