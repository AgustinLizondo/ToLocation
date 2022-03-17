import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';

const windowHeigth = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PreviewMap = () => {
    const navigation = useNavigation()
    
    async function handleLocation() {
        const status = await useSelector(state => state.permission.value)
        if (status === 'granted') {
            let currentLocation = await Location.getCurrentPositionAsync();
            console.log(currentLocation)
        } else {
            navigation.push('NotGranted')
        }
    }
    handleLocation();

    return (
        <View style={styles.map}>
            <Text>PreviewMap</Text>
        </View>
    )
}

export default PreviewMap

const styles = StyleSheet.create({
    map: {
        alignSelf: 'flex-end',
        height: windowHeigth - 320,
        width: (windowWidth / 4) * 3
    }
})