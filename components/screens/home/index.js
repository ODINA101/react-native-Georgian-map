import React, { Component } from 'react';
import {
    TextInput,
    BackHandler, Button, Platform, StyleSheet, Text, View, ImageBackground, Dimensions, PanResponder, Modal
} from 'react-native';
import SvgComponent from "./svgc"
const { width, height } = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TouchableIcon from "../../TouchableIcon"
import Interactable from 'react-native-interactable';
import ButtomBar from "./bottom"
import BottomBar from './bottom';
export default class App extends Component {
    state = {
        modalVisible: false,
    };
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.refs.svgC.back()
            return true;
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 100 }}>
                    <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 10, justifyContent: 'space-between', flexDirection: "row" }}>
                        <TouchableIcon onPress={() => this.props.navigation.push('Settings')} IconName="user" IconType={Feather} />
                        <TouchableIcon onPress={() => this.props.navigation.push('QrView')} IconName="qrcode" IconType={AntDesign} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
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
                <SvgComponent
                    showModal={() => this.setState({ modalVisible: true })}
                    ref='svgC'
                    navigation={this.props.navigation}
                />
                <BottomBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCBD00"
    }
});
