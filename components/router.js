import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/home"
import QrCodeScanner from "./screens/QrView"
import Settings from "./screens/settings"
import MapView from './screens/map'
import ServicesScreen from "./screens/services"
import SingleCatScreen from "./screens/SingleCat"
import VRscreen from './screens/VR'
import SplashScreen from "./screens/SplashScreen"
const AppNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen
    },
    Home: {
        screen: HomeScreen
    },
    VR: {
        screen: VRscreen
    },
    SingleCat: {
        screen: SingleCatScreen
    },
    Services: {
        screen: ServicesScreen
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