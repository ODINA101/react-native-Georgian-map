//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import GeoMap from "../../../assets/geominimap.png"
// create a component
class BottomBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={GeoMap} style={{ width: 100, height: 50 }} />
            </View>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        position: 'absolute',
        height: 100,
        backgroundColor: '#FFF',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

//make this component available to the app
export default BottomBar;
