import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OneLetterPage from '../components/TabNavigator/OneLetterPage'
import TwoLetterPage from '../components/TabNavigator/TwoLetterPage'
import ThreeLetterPage from '../components/TabNavigator/ThreeLetterPage'

const Tab = createMaterialTopTabNavigator();

const TabScreenNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='OneLetter' component={OneLetterPage} />
            <Tab.Screen name='TwoLetter' component={TwoLetterPage} />
            <Tab.Screen name='ThreeLetter' component={ThreeLetterPage} />
        </Tab.Navigator>
    )
}

export default TabScreenNavigator