import { StyleSheet, View, Dimensions } from 'react-native';
import {GOOGLE_API_KEY} from '@env'
import React, { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../store/actions/userdata.action';
import BasicButton from '../BasicButton';
import Colors from '../../assets/Constants/Colors';
import MapViewDirections from 'react-native-maps-directions'
import MapView, { Marker } from 'react-native-maps'


const windowHeigth = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PreviewMap = () => {

    ///////////////////////////////////////////////////

    const mapView = useRef()

    const [isReady, setIsReady] = useState(false)

    let userData = useSelector(state => state.userData.userData)

    let currentLatitude = (userData.latitude)
    let currentLongitude = (userData.longitude)

    console.log(currentLatitude, currentLongitude);

    const [fromLocation, setFromLocation] = useState({
        latitude: 34.4220014,
        longitude: -112.0840214,
    })

    const [toLocation, setToLocation] = useState({
        latitude: 36.952845,
        longitude: -121.7309,
    })

    const destinationMarker = () => (
        <Marker
            coordinate={toLocation}
        >
            <View
                style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.Gray
                }}
            >
                <View
                    style={{
                        height: 15,
                        width: 15,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Colors.SemiLightViolet
                    }}
                >
                </View>
            </View>
        </Marker>
    )
    const userIcon = () => (
        <Marker
            coordinate={fromLocation}
            anchor={{ x: 0.5, y: 0.5 }}
            flat={true}
        >
            <Icon name={'person'} size={16} color={Colors.SemiLightViolet} />
        </Marker>
    )

    ///////////////////////////////////////////////////

    const name = useSelector(state => state.auth.email)

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [region, setRegion] = useState({
        latitude: 34.4220014,
        longitude: -112.0840214,
    });

    const [city, setCity] = useState('City not provided yet');

    const verifyPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
            navigation.navigate('NotGranted')

            return false;
        }
        return true;
    }

    useEffect(() => {
        const getCity = async () => {
            let result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=${GOOGLE_API_KEY}`),
                resultJson = await result.json(),
                cityData = resultJson.plus_code.compound_code;

            const getCityCode = () => {
                let citySplitted = cityData.split(',');
                return (citySplitted[1] + ',' + citySplitted[2]).toString();
            }

            const cityCode = getCityCode();

            setCity(cityCode)
        }
        getCity();
    }, [region])

    const handleLocation = async () => {
        const isGranted = await verifyPermission();

        if (!isGranted) return;

        const currentLocation = await Location.getCurrentPositionAsync();
        let realRegion = {
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
        }
        setRegion(realRegion);
        setFromLocation({
            latitude: currentLatitude,
            longitude: currentLongitude,
        })

        dispatch(setUserData(name, region.latitude, region.longitude, city));
    }

    const handleAddLocation = async () => {
        navigation.navigate('Addition')
    }

    return (
        <View style={styles.map}>
            <MapView
                ref={mapView}
                initialRegion={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: region.latitude,
                    longitudeDelta: region.longitude,
                }}
                style={styles.realMap}
                minZoomLevel={2}
                showsCompass={false}
                showsScale={false}
                showsPointsOfInterest={false}
                showsMyLocationButton={false}
                showsBuildings={false}
            >
                <MapViewDirections
                    origin={fromLocation}
                    destination={toLocation}
                    apikey={GOOGLE_API_KEY}
                    strokeWidth={5}
                    strokeColor={Colors.LightViolet}
                    optimizeWaypoints={true}
                    onReady={result => {
                        if (!isReady) {
                            mapView.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: (8),
                                    bottom: (8),
                                    left: (8),
                                    top: (8)
                                }
                            })

                            let nextLoc = {
                                latitude: result.coordinates[0]["latitude"],
                                longitude: result.coordinates[0]["longitude"]
                            }

                            setFromLocation(nextLoc)
                            setIsReady(true)
                        }
                    }}
                />
                {destinationMarker()}
                {userIcon()}
            </MapView>
            {/* {region.latitude === 34.4220014
                ? <BasicButton onTap={handleLocation} text='Get Location' />
                : <BasicButton onTap={handleAddLocation} text='Set Destination' />
            } */}
            <BasicButton onTap={handleLocation} text='Get Location' />
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
    realMap: {
        height: windowHeigth - 200,
        width: ((windowWidth / 4) * 3),
    }
})