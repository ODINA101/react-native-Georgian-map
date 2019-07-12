//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TouchableIcon from "../../TouchableIcon"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Item from "./item"
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

// create a component
class Setting extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 80 }}>
                    <TouchableIcon IconName="close" onPress={() => this.props.navigation.pop()} IconType={AntDesign} />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Item content="Personal Details" IconType={Feather} IconName="user" />
                    <Item content="Manage Payment" IconType={MaterialIcons} IconName="payment" />
                    <Item content="Share and earn!" IconType={FontAwesome5} IconName="money-check-alt" />
                    <Item content="Promocodes" IconType={MaterialIcons} IconName="redeem" />
                    <Item content="Promocodes" IconType={MaterialIcons} IconName="redeem" />
                    <Item content="Trucking Services" IconType={FontAwesome5} IconName="truck" />
                    <Item content="F.A.Q" IconType={FontAwesome5} IconName="question-circle" />
                    <Item content="Help" IconType={FontAwesome5} IconName="headset" />
                    <Item content="Log Out" IconType={FontAwesome5} IconName="external-link-alt" />

                </View>



            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 10
    },
});

//make this component available to the app
export default Setting;
