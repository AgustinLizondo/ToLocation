import { Image, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import OptionItem from './OptionItem';
import { SelectedContext } from './Provider/Provider';

const { width, height } = Dimensions.get('window');

const LeftInfoScreen = () => {

    const [selectedProfile, setSelectedProfile] = useState('walk');

    return (
        <SelectedContext.Provider value={[selectedProfile, setSelectedProfile]} >
            <View style={styles.card}>
                <TouchableOpacity style={styles.touchableIcon}>
                    <Icon name='menu' size={64} color={Colors.Gray} />
                </TouchableOpacity>
                <Image style={styles.image} source={require('../../assets/GLOCATION.jpg')} />
                <View style={{ height: height - 240, top: 64, justifyContent: 'space-around', alignItems: 'center' }}>
                    <OptionItem name={'walk'} selected={true} />
                    <OptionItem name={'bicycle'} selected={false} />
                </View>
            </View>
        </SelectedContext.Provider>
    )
}

export default LeftInfoScreen

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.White,
        color: Colors.White,
        borderBottomLeftRadius: 24,
        height: (height + 320),
        top: -320,
        paddingTop: 120,
        width: '25%',
        alignSelf: 'flex-start',
    },
    image: {
        transform: [{ rotate: '-90deg' }],
        width: 124,
        height: 64,
        alignSelf: 'center',
    },
    touchableIcon: {
        top: -80,
        alignSelf: 'center',
    }
})