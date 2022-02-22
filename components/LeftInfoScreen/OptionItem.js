import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { SelectedContext } from './Provider/Provider';

const OptionItem = ({ name, selected }) => {

    const [selectedProfile, setSelectedProfile] = useContext(SelectedContext);

    return (
        <TouchableOpacity style={[styles.card, selected ? styles.selectedBorder : null]}>
            <Icon name={name} size={48} color={selected ? Colors.BoldViolet : Colors.Gray} />
            <Text style={[styles.text, { color: selected ? Colors.BoldViolet : Colors.Gray }]}>Walking</Text>
        </TouchableOpacity>
    )
}

export default OptionItem

const styles = StyleSheet.create({
    card: {
        width: '100%',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Poppins-Bold',
    },
    selectedBorder: {
        borderRightColor: Colors.BoldViolet,
        borderRightWidth: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    }
})