import React, { Component } from 'react';
import { TouchableHighlight, BackHandler, Button, Platform, StyleSheet, Text, View, ImageBackground, Dimensions, PanResponder, Modal } from 'react-native';
import SvgComponent from "./svgc"
const { width, height } = Dimensions.get('window');
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';



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
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>
              <Button
                onPress={() => this.setState({ modalVisible: false })}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </Modal>
        <SvgComponent
          showModal={() => this.setState({ modalVisible: true })}
          ref='svgC'
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
