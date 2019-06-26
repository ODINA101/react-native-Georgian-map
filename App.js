import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, PanResponder } from 'react-native';
import SvgComponent from "./svgc"
const { width, height } = Dimensions.get('window');
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';



export default class App extends Component {



  render() {

    return (
      <View style={styles.container} >

        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          style={{
            padding: 10,
          }}
        >
          <SvgComponent
            width={width}
            height={height}
          /></ReactNativeZoomableView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1
  }
});
