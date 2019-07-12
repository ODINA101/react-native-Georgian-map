//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Icon extends Component {
    render() {
        let Icon = this.props.IconType;
        return (
            <Icon {...this.props} />
        );
    }
}

// define your styles
//make this component available to the app
export default Icon;
