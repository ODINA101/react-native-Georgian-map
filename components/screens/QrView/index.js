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
import TouchableIcon from "../../TouchableIcon"
import QRCodeScanner from 'react-native-qrcode-scanner';
import Ionicons from "react-native-vector-icons/Ionicons"
import Flag from 'react-native-round-flags';
// create a component
import SoundPlayer from 'react-native-sound-player'
class QrCodeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            sounds: [
                {
                    id: 'Vocaroo_s1N6JA5PMfu0.mp3',
                    name: 'English',
                    iso: 'US'
                },
                {
                    id: 'Vocaroo_s0AfkQRnIMHt.mp3',
                    name: "Russian",
                    iso: 'RU'
                },
                {
                    id: 'Vocaroo_s1BFpxcPIIpu.mp3',
                    name: 'Italian',
                    iso: 'IT'
                },
                {
                    id: 'Vocaroo_s1lDWlYOvuPX.mp3',
                    name: 'German',
                    iso: 'DE'
                },

                {
                    id: 'Vocaroo_s10UkDaS51ok.mp3',
                    name: 'Spanish',
                    iso: 'ES'
                },
                {
                    id: 'Vocaroo_s1PKI1jqxcXr.mp3',
                    name: 'French',
                    iso: 'FR'
                },
            ]
        }


    }
    onSuccess = (e) => {
        this.setState({ modal: true })
    }
    _topContent() {
        return (
            <View style={{ height: 0 }}>

            </View>
        )
    }

    _bottomContent() {
        return (
            <View style={{ height: 0 }}></View>
        )
    }


    LanguageItem = (language, Iso, id) => {
        return (
            <TouchableOpacity onPress={() => {
                try {
                    SoundPlayer.playUrl('https://s0.vocaroo.com/media/download_temp/' + id)
                } catch (e) {
                    alert(`cannot play the sound file`, e)
                }
            }}>
                <View style={{ marginTop: 20, elevation: 4, flexDirection: 'row', paddingLeft: 5, borderRadius: 8, width: 200, height: 60, backgroundColor: '#FAD8CF' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Flag style={{ width: 30, height: 30 }} code={Iso} />
                    </View>
                    <View style={{ flex: 3, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#000' }}>{language}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "black" }}>


                <View style={{ padding: 20 }}>
                    <TouchableIcon IconName="ios-arrow-back" onPress={() => this.props.navigation.pop()} IconType={Ionicons} color="#FFF" />
                </View>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    containerStyle={{ flex: 1 }}
                    topContent={this._topContent()}
                    bottomContent={this._bottomContent()}
                />

                {
                    this.state.modal ? (
                        <View style={{ zIndex: 999999999, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ borderRadius: 20, position: 'absolute', backgroundColor: '#FE7A6B', alignItems: 'center', width: 300, padding: 20 }} >
                                {
                                    this.state.sounds.map(item => {
                                        return (
                                            <View>
                                                {this.LanguageItem(item.name, item.iso, item.id)}
                                            </View>)
                                    })
                                }


                            </View>
                        </View>
                    ) : (<View />)
                }
            </View>
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
