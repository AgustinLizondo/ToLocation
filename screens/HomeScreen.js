import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopRightCard from '../components/TopInfoScreen/TopRightCard'
import BasicInfo from '../components/TopInfoScreen/BasicInfo'
import AddingButton from '../components/AddingButton/AddingButton'
import LeftInfoScreen from '../components/LeftInfoScreen/LeftInfoScreen'
import PreviewMap from '../components/PreviewMap/PreviewMap'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.card}>
            <TopRightCard>
                <BasicInfo />
            </TopRightCard>
            <LeftInfoScreen />
            <AddingButton />
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