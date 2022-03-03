import React, { useContext } from 'react';
import WelcomeGuest from '../components/WelcomeGuest';
import ItemList from '../components/ItemList/ItemList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemsContext } from './ItemList/Provider/Provider';

const Stack = createNativeStackNavigator();
const MainScreenNavigator = () => {

    const [isLogged, setIsLogged] = useContext(ItemsContext);

    return (
        <Stack.Navigator
            initialRouteName={isLogged
                ? 'HomeScreen'
                : 'WelcomeScreen'
            }
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='WelcomeScreen' component={WelcomeGuest} />
            <Stack.Screen name='HomeScreen' component={ItemList} />
        </Stack.Navigator>
    )
}

export default MainScreenNavigator