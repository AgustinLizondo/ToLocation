import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../../assets/Constants/Colors'
import { useDispatch } from 'react-redux'
import { goThere } from '../../store/actions/destination.action'

const LocationButton = (data) => {
    const dispatch = useDispatch();
    let item = data.item
    console.log(item.location)
    
    function handleSetDestination() {
        // Here we need to set "toLocation" variable used in "PreviewMap" 
        // To set the destination.
        dispatch(goThere(item.location))
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handleSetDestination}>
            <Icon name={item.logo} size={32} />
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default LocationButton

const styles = StyleSheet.create({
    button: {
        width: 76,
        height: 76,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: Colors.White,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 4
    }
})