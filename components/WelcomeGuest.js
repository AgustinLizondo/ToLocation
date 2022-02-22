import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import ItemContainer from './ItemList/ItemContainer'
import { LogInContext } from './ItemList/Provider/Provider'
import Colors from '../assets/Colors'

const WelcomeGuest = () => {

  const [isLogged, setIsLogged] = useContext(LogInContext);

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Text>Welcome Guest!</Text>
      <TouchableOpacity onPress={() => setIsLogged(true)} style={styles.pressButton}>
        <Text>Press me to start!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeGuest

const styles = StyleSheet.create({
  pressButton: {
    width: 256,
    height: 48,
    backgroundColor: Colors.BoldViolet,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  }
})