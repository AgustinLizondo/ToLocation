import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'
import AdditionScreen from '../screens/AdditionScreen';
import NotGranted from '../screens/NotGranted'
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { changePermission } from '../store/actions/permission.action';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    const dispatch = useDispatch();
    async function askForPermission() {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            dispatch(changePermission(status));
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        askForPermission();
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Addition' component={AdditionScreen} />
                <Stack.Screen name='NotGranted' component={NotGranted} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})