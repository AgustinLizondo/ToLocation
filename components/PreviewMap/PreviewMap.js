import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import Map from './Map';
import Colors from '../../assets/Constants/Colors';

const windowHeigth = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PreviewMap = () => {
    const navigation = useNavigation();

    const [region, setRegion] = useState({
        latitude: 34.4220014,
        longitude: -112.0840214,
    });

    const verifyPermission = async () => {
        // const status = await useSelector(state => state.permission.value);
        const { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
            navigation.navigate('NotGranted')

            return false;
        }
        return true;
    }

    const handleLocation = async () => {
        const isGranted = await verifyPermission();

        if (!isGranted) return;

        const currentLocation = await Location.getCurrentPositionAsync();
        setRegion(currentLocation.coords);
    }

    return (
        <View style={styles.map}>
            {!region
                ? <Text style={{ zIndex: 10000, marginTop: 100 }}>Loading Map...</Text>
                : <Map region={region} />
            }
            <TouchableOpacity onPress={handleLocation} style={styles.button}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18 }} >Get Location</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PreviewMap

const styles = StyleSheet.create({
    map: {
        height: (windowHeigth - 320),
        width: '75%',
        position: 'absolute',
        justifyContent: 'flex-end',
        bottom: 0,
        alignSelf: 'flex-end'
    },
    button: {
        width: 256,
        height: 48,
        backgroundColor: Colors.SemiLightViolet,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 64,
        alignSelf: 'center',
        marginTop: 44,
    },
})