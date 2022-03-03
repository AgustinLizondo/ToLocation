import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MainScreenNavigator from '../components/MainScreenNavigator';
import TabScreenNavigator from '../components/TabScreenNavigator';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../assets/Colors';

const Tab = createMaterialTopTabNavigator();

const MainNavigator = () => {
    return (
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
    )
}

const styles = StyleSheet.create({
    tabBar: {
        marginTop: 24,
    }
})

export default MainNavigator