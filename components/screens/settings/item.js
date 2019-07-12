//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from "./Icon"


class Item extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ height: 70, alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Icon name={this.props.IconName} color="#000" IconType={this.props.IconType} size={30} />
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ color: "#000", fontSize: 17 }}>{this.props.content}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Icon name="ios-arrow-forward" color="#000" IconType={Ionicons} size={30} />
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: '#979797' }} />
            </View>
        );
    }
}

// define your styles

//make this component available to the app
export default Item;
