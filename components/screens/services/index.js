//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import TouchableIcon from '../../TouchableIcon'
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"

// create a component
class Services extends Component {
    render() {
        let cats = ["Hotels", "Rental Car", "Swimming Pools", "kaxa", "parkuri", "lover"]
        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ height: 100 }}>
                        <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 10, justifyContent: 'space-between', flexDirection: "row" }}>
                            <TouchableIcon onPress={() => this.props.navigation.push('Settings')} IconName="user" IconType={Feather} />
                            <TouchableIcon onPress={() => this.props.navigation.push('QrView')} IconName="qrcode" IconType={AntDesign} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <TouchableIcon IconName="left" color="#FFF" IconType={AntDesign} />
                                <View style={{ paddingLeft: 15, paddingRight: 30 }}>
                                    <View style={{ width: 300, borderRadius: 50, height: 50, flexDirection: 'row', backgroundColor: "#FFF" }}>
                                        <View style={{ flex: 1 }}>
                                            <TextInput placeholder="Search" style={{ flex: 1, paddingLeft: 10, fontSize: 17 }} />
                                        </View>
                                        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                            <Feather name="search" size={25} color="#000" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 43 }}>
                        <Text style={{ fontSize: 30, color: '#FFF', fontWeight: "bold", fontFamily: 'Roboto' }}>Tbilisi</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: 26, marginBottom: 40 }}>

                        {
                            cats.map(item => {
                                return (
                                    <ImageBackground borderRadius={18} style={{ width: 375, height: 200, marginTop: 20 }} source={{ uri: 'https://d2i9a1098e7tai.cloudfront.net/hardrockhotels.com-315677683/cms/cache/v2/5b48d841e765c.jpg/840x400/fit;c:196,246,4682,3236/80/bdf53a9ba4838bb818cc3d5bafe9992f.jpg' }} >
                                        <View style={{ flex: 1, padding: 15, borderRadius: 18, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                            <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: 17 }}>{item}</Text>
                                        </View>
                                    </ImageBackground>
                                )

                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCBD00',
    },
});

//make this component available to the app
export default Services;
