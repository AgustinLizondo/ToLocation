import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../assets/Colors'
import { useSelector, useDispatch } from 'react-redux'
import { changeLogin } from '../store/actions/login.action'
import { Alert } from 'react-native-web'

const WelcomeGuest = ({ navigation }) => {

  const dispatch = useDispatch();
  // const isLogged = useSelector(state => state.isLogged.value)

  const handleChangeScreen = () => {
    dispatch(changeLogin(true))
    navigation.navigate('HomeScreen')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Text>Welcome Guest!</Text>
      <TouchableOpacity onPress={handleChangeScreen} style={styles.pressButton}>
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