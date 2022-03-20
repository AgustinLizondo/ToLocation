import { StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Colors from '../../assets/Constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'


const AddingButton = () => {

    const navigation = useNavigation();

    const handleAddAdress = () => {
        // navigation.navigate('Addition')
        Alert.alert(
            `We're working on this section.`,
            `Please be patient while we finish.`,
            [`OK`]
        )
    }

    return (
        <TouchableOpacity style={styles.card} onPress={handleAddAdress}>
            <Icon name='plus' size={32} color={Colors.White} />
        </TouchableOpacity>
    )
}

export default AddingButton

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        bottom: 32,
        right: 32,
        backgroundColor: Colors.BoldViolet,
        height: 48,
        width: 48,
    }
})