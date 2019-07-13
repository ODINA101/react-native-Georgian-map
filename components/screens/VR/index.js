//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, BackHandler } from 'react-native';
import { VideoView } from 'react-native-gvr'
const { width, height } = Dimensions.get("window");

// create a component
class VrView extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.pop()
        });
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        this.goBack(); // works best when the goBack is async
        return true;
    }
    render() {
        return (
            <View style={styles.container}>
                <VideoView
                    style={{ height, width }}
                    source={{
                        uri: 'https://cdn-b-east.streamable.com/video/mp4/mz141.mp4?token=69_qHebZzC9R6JwXHsTEOA&expires=1563065160',
                        type: 'mono'
                    }}
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
