import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, PanResponder } from 'react-native';
import SvgComponent from "./svgc"
const { width, height } = Dimensions.get('window');
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';



export default class App extends Component {



  render() {

    return (
      <View style={styles.container} >

        <SvgComponent
          width={width}
          height={height}

        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
