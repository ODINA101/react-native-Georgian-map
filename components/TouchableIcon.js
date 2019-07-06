//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

// create a component
class TouchableIcon extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let Icon = this.props.IconType;
        let IconName = this.props.IconName;

        return (
            <View style={{ borderRadius: 25 }}>
                <TouchableNativeFeedback
                    onPress={() => { }}
                    background={TouchableNativeFeedback.Ripple('#AAF', true)}>
                    <View style={{ width: 35, height: 35, justifyContent: 'center', alignContent: 'center', borderRadius: 25, backgroundColor: 'transparent' }}>
                        <Icon name={IconName} size={30} color="#000" />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}



export default TouchableIcon;
