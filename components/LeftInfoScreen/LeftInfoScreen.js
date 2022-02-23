import { Image, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../../assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import OptionItem from './OptionItem';
import { SelectedContext } from './Provider/Provider';

const { width, height } = Dimensions.get('window');

const LeftInfoScreen = () => {

    const [selectedProfile, setSelectedProfile] = useContext(SelectedContext);

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.touchableIcon}>
                <Icon name='menu' size={64} color={Colors.Gray} />
            </TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/GLOCATION.png')} />
            <View style={{ height: height - 240, top: 64, justifyContent: 'space-around', alignItems: 'center' }}>
                <OptionItem name={'walk'} selected={selectedProfile === 'walk' ? true : false} />
                <OptionItem name={'bicycle'} selected={selectedProfile === 'bicycle' ? true : false} />
            </View>
        </View>
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