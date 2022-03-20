import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AdditionScreen from '../screens/AdditionScreen';
import NotGranted from '../screens/NotGranted';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName='Home'
            >
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Addition' component={AdditionScreen} />
                <Stack.Screen name='NotGranted' component={NotGranted} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default MainNavigator