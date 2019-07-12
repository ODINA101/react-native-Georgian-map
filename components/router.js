import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/home"
import QrCodeScanner from "./screens/QrView"
import Settings from "./screens/settings"
import MapView from './screens/map'
import ServicesScreen from "./screens/services"
import SingleCatScreen from "./screens/SingleCat"
import VRscreen from './screens/VR'
const AppNavigator = createStackNavigator({
    VR: {
        screen: VRscreen
    },
    SingleCat: {
        screen: SingleCatScreen
    },
    Services: {
        screen: ServicesScreen
    },
    Home: {
        screen: HomeScreen
    },
    MapView: {
        screen: MapView
    },
    Settings: {
        screen: Settings
    },
    QrView: {
        screen: QrCodeScanner,
    },
}, {
        headerMode: 'none'
    });

export default createAppContainer(AppNavigator);