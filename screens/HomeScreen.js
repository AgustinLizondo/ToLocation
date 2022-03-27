import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import TopRightCard from '../components/TopInfoScreen/TopRightCard'
import BasicInfo from '../components/TopInfoScreen/BasicInfo'
import LeftInfoScreen from '../components/LeftInfoScreen/LeftInfoScreen'
import PreviewMap from '../components/PreviewMap/PreviewMap'
import * as Location from 'expo-location';
import { useDispatch, useSelector } from 'react-redux';
import { changePermission } from '../store/actions/permission.action';
import { setUserData } from '../store/actions/userdata.action'

const HomeScreen = () => {

    const name = useSelector(state => state.auth.email)

    const dispatch = useDispatch();
    dispatch(setUserData(name));
    useEffect(() => {
        async function askForPermission() {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                dispatch(changePermission(status));
            } catch (err) {
                console.log(err)
            }
        }
        askForPermission();
    }, [])

    return (
        <View style={styles.card}>
            <TopRightCard>
                <BasicInfo />
            </TopRightCard>
            <LeftInfoScreen />
            <PreviewMap />
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