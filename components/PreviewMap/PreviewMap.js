import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MapView from 'react-native-maps';
import Colors from '../../assets/Constants/Colors';

const windowHeigth = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PreviewMap = () => {
    const navigation = useNavigation();

    let currentRegion;

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
        currentRegion = currentLocation;
    }

    return (
        <View style={styles.map}>
            <MapView
                region={{
                    latitude: currentRegion.coords.latitude,
                    longitude: currentRegion.coords.longitude,
                    latitudeDelta: currentRegion.coords.latitude,
                    longitudeDelta: currentRegion.coords.longitude,
                }}
                style={{
                    height: windowHeigth - 180,
                    width: (windowWidth / 4) * 3,
                    position: 'absolute',
                }}
            />
            <TouchableOpacity onPress={handleLocation} style={styles.button}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18 }} >Get Location</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PreviewMap

const styles = StyleSheet.create({
    map: {
        height: windowHeigth,
        width: (windowWidth / 4) * 3,
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 236,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    button: {
        width: 256,
        height: 48,
        backgroundColor: Colors.SemiLightViolet,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 44,
    },
})