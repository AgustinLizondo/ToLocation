import { StyleSheet } from 'react-native'
import React from 'react'
import MainScreenNavigator from '../components/MainScreenNavigator';
import TabScreenNavigator from '../components/TabScreenNavigator';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../assets/Colors';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: styles.tabBar,
                    tabBarPressColor: Colors.LightViolet,
                    tabBarActiveTintColor: Colors.BoldViolet,
                }}
            >
                <Tab.Screen name='MainScreenNavigator' component={MainScreenNavigator} />
                <Tab.Screen name='TabScreenNavigator' component={TabScreenNavigator} />
            </Tab.Navigator >
        </NavigationContainer >
    )
}

const styles = StyleSheet.create({
    tabBar: {
        marginTop: 24,
    }
})

export default MainNavigator