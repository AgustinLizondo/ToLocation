import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const windowHeigth = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Map = ({ region }) => {
    return (
        <MapView
            region={{
                latitude: region.latitude,
                longitude: region.longitude,
                latitudeDelta: region.latitude,
                longitudeDelta: region.longitude,
            }}
            style={styles.map}
            minZoomLevel={6}
            showsUserLocation={true}
            showsCompass={false}
            showsScale={false}
            showsPointsOfInterest={false}
            showsMyLocationButton={false}
            showsBuildings={false}
        />
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        height: windowHeigth - 200,
        width: ((windowWidth / 4) * 3),
    }
})