import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { Component } from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import TouchableIcon from "../../TouchableIcon"
import Ionicons from 'react-native-vector-icons/Ionicons';
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1,
        zIndex: 0
    },
});

export default (props) => (
    <View style={styles.container}>
        <View style={{ height: 80, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 15 }}>
                <TouchableIcon onPress={() => props.navigation.pop()} IconName="ios-arrow-back" IconType={Ionicons} />
            </View>
            <View style={{ flex: 3 }}>
            </View>

        </View>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
        >
        </MapView>
    </View>
); 