import { StyleSheet } from 'react-native'
import React from 'react'
import MainScreenNavigator from '../components/MainScreenNavigator';
import TabScreenNavigator from '../components/TabScreenNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='MainScreenNavigator' component={MainScreenNavigator} />
                <Stack.Screen name='TabScreenNavigator' component={TabScreenNavigator} />
            </Stack.Navigator >
        </NavigationContainer >
    )
}

const styles = StyleSheet.create({})

export default MainNavigator