import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/home"
import QrCodeScanner from "./screens/QrView"
const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    QrView: {
        screen: QrCodeScanner,
    },
}, {
        headerMode: 'none'
    });

export default createAppContainer(AppNavigator);