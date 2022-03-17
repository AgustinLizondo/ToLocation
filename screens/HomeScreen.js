import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopRightCard from '../components/TopInfoScreen/TopRightCard'
import BasicInfo from '../components/TopInfoScreen/BasicInfo'
import AddingButton from '../components/AddingButton/AddingButton'
import LeftInfoScreen from '../components/LeftInfoScreen/LeftInfoScreen'
import * as Location from 'expo-location';

const HomeScreen = ({ navigation }) => {

    // async function handleLocation() {
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status === 'granted') {
    //         let location = await Location.getCurrentPositionAsync({})
    //         console.log(location)
    //     }
    // }
    // handleLocation();

    return (
        <View style={styles.card}>
            <TopRightCard>
                <BasicInfo />
            </TopRightCard>
            <LeftInfoScreen />
            <AddingButton />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 64,
    }
})