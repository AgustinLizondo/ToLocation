import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import TopRightCard from './components/TopInfoScreen/TopRightCard';
import Fonts from './assets/Fonts';
import LeftInfoScreen from './components/LeftInfoScreen/LeftInfoScreen';
import BasicInfo from './components/TopInfoScreen/BasicInfo';
import { MenuContext } from './components/TopInfoScreen/Provider/Provider';
import { SelectedContext } from './components/LeftInfoScreen/Provider/Provider';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState('walk');

  const [loaded] = useFonts(Fonts);
  if (!loaded) return <AppLoading />

  return (
    <MenuContext.Provider value={[isMenuOpen, setIsMenuOpen]} >
      <SelectedContext.Provider value={[selectedProfile, setSelectedProfile]}>
        <View style={styles.container}>
          <TopRightCard>
            {isMenuOpen
              ? null
              : <BasicInfo />
            }

          </TopRightCard>
          <LeftInfoScreen />
        </View>
      </SelectedContext.Provider>
    </MenuContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 64,
  },
});
