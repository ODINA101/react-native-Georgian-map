//import liraries
import React, { Component } from 'react';

import {
    View,
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
// create a component
class QrCodeView extends Component {
    onSuccess = (e) => {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));
    }
    _topContent() {
        return (
            <View style={{ height: 0 }}></View>
        )
    }
    _bottomContent() {
        return (
            <View style={{ height: 0 }}></View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "black" }}>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    containerStyle={{ flex: 1 }}
                    topContent={this._topContent()}
                    bottomContent={this._bottomContent()}
                /></View>
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});
//make this component available to the app
export default QrCodeView;
