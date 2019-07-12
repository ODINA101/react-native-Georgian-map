//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { VideoView } from 'react-native-gvr'
const { width, height } = Dimensions.get("window");

// create a component
class VrView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <VideoView
                    style={{ height, width }}
                    source={{
                        uri: 'https://d2v9y0dukr6mq2.cloudfront.net/video/preview/pbJRSBz/videoblocks-virtual-reality-360-view-from-the-city-noto-in-italy_BRb28dDa-__WM.mp4',
                        type: 'mono'
                    }}
                    displayMode={'fullscreen'}
                    volume={1}
                    enableCardboardButton
                    enableTouchTracking
                    hidesTransitionView
                    enableInfoButton={false}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default VrView;
