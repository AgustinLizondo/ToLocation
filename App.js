import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ItemList from './components/ItemList/ItemList';
import { ItemsContext } from './components/ItemList/Provider/Provider';


export default function App() {
  const [toLocationList, setToLocationList] = useState([]);
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
    justifyContent: 'center',
  },
});
