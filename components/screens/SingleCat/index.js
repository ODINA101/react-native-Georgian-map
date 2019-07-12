//import liraries
import React, { Component } from 'react';
import { ScrollView, ImageBackground, View, Text, Dimensions, StyleSheet, TextInput } from 'react-native';
import TouchableIcon from "../../TouchableIcon"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ViewOverflow from 'react-native-view-overflow';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
const { width, height } = Dimensions.get('window');
import Slideshow from 'react-native-image-slider-show';
import { TouchableOpacity } from 'react-native';
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// create a component
let rooms = [
    {
        photos: [
            {
                url: 'http://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/12/2016/02/09120423/Pullman-Executive-Room-King-Bed-1.jpg'
            },
            {
                url: 'http://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/12/2016/02/09120423/Pullman-Executive-Room-King-Bed-1.jpg'
            },
            {
                url: 'http://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/12/2016/02/09120423/Pullman-Executive-Room-King-Bed-1.jpg'
            }
        ]
    }
]
class SingleCat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        };
    }

    render() {
        const customStyle = [
            {
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#242f3e',
                    },
                ],
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#746855',
                    },
                ],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#242f3e',
                    },
                ],
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#d59563',
                    },
                ],
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#d59563',
                    },
                ],
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#263c3f',
                    },
                ],
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#6b9a76',
                    },
                ],
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#38414e',
                    },
                ],
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#212a37',
                    },
                ],
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#9ca5b3',
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#746855',
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#1f2835',
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#f3d19c',
                    },
                ],
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#2f3948',
                    },
                ],
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#d59563',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#17263c',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#515c6d',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#17263c',
                    },
                ],
            },
        ];
        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }} >
                    <ViewOverflow>
                        <ImageBackground style={{ height: 300, overflow: 'visible' }} source={{ uri: 'http://laurent-clark.com/data/YsT88fwK/ph-terrasse.jpg' }}>

                            <View style={{ marginTop: 90, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <TouchableIcon IconName="left" color="#FFF" IconType={AntDesign} />
                                    <View style={{ paddingLeft: 15, paddingRight: 30 }}>
                                        <View style={{ width: 300, borderRadius: 50, height: 50, flexDirection: 'row', backgroundColor: "#FFF" }}>
                                            <View style={{ flex: 1 }}>
                                                <TextInput placeholder="Search" style={{ flex: 1, paddingLeft: 10, fontSize: 17 }} />
                                            </View>
                                            <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                                <Feather name="search" size={25} color="#000" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ width: 320, borderRadius: 15, height: 150, backgroundColor: '#FFF', marginTop: 100 }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 24, color: "#000" }}>Courtyard Marriot</Text>
                                    </View>

                                    <View style={{ paddingHorizontal: 10, paddingTop: 30, flexDirection: 'row', justifyContent: 'space-between', }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesome5 name="parking" color="#000" size={20} />
                                            <Text style={{ marginLeft: 8 }}>Free Parking</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesome5 name="wifi" color="#000" size={20} />
                                            <Text style={{ marginLeft: 8 }}>Free Wifi</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <FontAwesome name="thumbs-o-up" color="#000" size={20} />
                                            <Text style={{ marginLeft: 8 }}>99%(100)</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', padding: 10 }}>
                                        <Text>
                                            Address: 4 Freedom Square
                                         </Text>
                                    </View>

                                </View>
                            </View>
                        </ImageBackground>
                    </ViewOverflow>

                    <View style={{ padding: 20, marginTop: 100 }}>
                        <TouchableOpacity>
                            <ImageBackground source={{ uri: 'https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1' }}
                                borderRadius={20}
                                style={{ height: 90 }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(18, 206, 158, 0.4)', borderRadius: 20 }}>
                                    <Text style={{ color: "#FFF", fontSize: 49, fontWeight: 'bold' }}>TRY VR</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>




                    <View style={{ padding: 20 }}>
                        <View style={{ overflow: 'hidden', borderRadius: 20, zIndex: 9999999 }}>
                            <MapView
                                customMapStyle={customStyle}
                                provider={this.props.provider}
                                style={styles.map}
                                scrollEnabled={false}
                                zoomEnabled={false}
                                pitchEnabled={false}
                                rotateEnabled={false}
                                initialRegion={this.state.region}
                            >
                                <Marker
                                    title="This is a title"
                                    description="This is a description"
                                    coordinate={this.state.region}
                                />
                            </MapView>
                        </View>
                    </View>


                    <View style={{ padding: 20 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 70, borderRadius: 30, backgroundColor: '#12CE9E' }}>
                            <Text style={{ fontSize: 20, color: "#FFF", fontWeight: 'bold' }}>GO</Text>
                        </View>
                    </View>

                    <View style={{ padding: 20 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 70, borderRadius: 30, backgroundColor: '#12CE9E' }}>
                            <Text style={{ fontSize: 20, color: "#FFF", fontWeight: 'bold' }}>CHAT</Text>
                        </View>
                    </View>

                    <View style={{ padding: 20 }}>
                        <Text style={{ color: '#4A4A4A', fontSize: 20, fontWeight: 'bold' }}>Rooms</Text>

                    </View>
                    <View style={{ padding: 20 }}>
                        {
                            rooms.map(room => {
                                return (
                                    <View>
                                        <View style={{ borderRadius: 20, overflow: 'hidden' }}>
                                            <Slideshow
                                                dataSource={room.photos} />
                                        </View>
                                        <View style={{ backgroundColor: '#FFF', borderRadius: 20, minHeight: 100, marginTop: 15 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                                                <Text style={{ color: "#000", fontSize: 20, fontWeight: 'bold' }}>Standard Single Room</Text>
                                                <Text style={{ color: "#000", fontSize: 20, fontWeight: 'bold' }}>$119</Text>
                                            </View>
                                            <View style={{ padding: 20, flexDirection: 'row' }}>
                                                <View style={{ flex: 0.82 }}>
                                                    <Text>2 double beds
                                                    2 rooms left!</Text>
                                                </View>
                                                <View style={{ flex: 2, alignItems: 'flex-end' }}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 50, backgroundColor: '#12CE9E', borderRadius: 10 }}>
                                                        <Text style={{ color: "#FFF" }}>Book</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </View>

                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCBD00'
    },
    map: {
        height: 250,
        borderRadius: 20,
    },
});

//make this component available to the app
export default SingleCat;
