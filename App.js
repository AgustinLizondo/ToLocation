import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ItemList from './components/ItemList/ItemList';
import { ItemsContext } from './components/ItemList/Provider/Provider';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import TopCard from './components/TopInfoScreen/TopRightCard';
import Fonts from './assets/Fonts';
import Colors from './assets/Colors';
import LeftInfoScreen from './components/LeftInfoScreen/LeftInfoScreen';

export default function App() {
  const [toLocationList, setToLocationList] = useState([]);

  const [loaded] = useFonts(Fonts);
  if (!loaded) return <AppLoading />

  return (
    <ItemsContext.Provider value={[toLocationList, setToLocationList]}>
      <View style={styles.container}>
        {/* <ItemList /> */}
        <TopCard>
          <Text style={{ color: Colors.White, fontFamily: 'Poppins-Medium' }}>Going to <Text>New York City</Text></Text>
        </TopCard>
        <LeftInfoScreen />
      </View>
    </ItemsContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 64,
  },
});
