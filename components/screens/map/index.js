import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { Component } from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import TouchableIcon from "../../TouchableIcon"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geojson from './geojson';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1,
        zIndex: 0
    },
});
const alcatraz = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            44.7701309,
                            41.6647626,
                            0
                        ],
                        [
                            44.8511766,
                            41.6586051,
                            0
                        ],
                        [
                            44.8621659,
                            41.623702,
                            0
                        ],
                        [
                            44.9706849,
                            41.685283,
                            0
                        ],
                        [
                            44.9679376,
                            41.7140006,
                            0
                        ],
                        [
                            44.8662869,
                            41.7078479,
                            0
                        ],
                        [
                            44.8566714,
                            41.7416805,
                            0
                        ],
                        [
                            44.7866148,
                            41.7939323,
                            0
                        ],
                        [
                            44.7989778,
                            41.826696,
                            0
                        ],
                        [
                            44.7399104,
                            41.8277196,
                            0
                        ],
                        [
                            44.6753484,
                            41.8226014,
                            0
                        ],
                        [
                            44.7220529,
                            41.8021248,
                            0
                        ],
                        [
                            44.705569,
                            41.7775442,
                            0
                        ],
                        [
                            44.6959534,
                            41.7662749,
                            0
                        ],
                        [
                            44.6822168,
                            41.7560284,
                            0
                        ],
                        [
                            44.6932061,
                            41.7457802,
                            0
                        ],
                        [
                            44.645128,
                            41.7427055,
                            0
                        ],
                        [
                            44.6382597,
                            41.7242538,
                            0
                        ],
                        [
                            44.7701309,
                            41.6647626,
                            0
                        ]
                    ]
                ]
            },
            "properties": {
                "name": "Tbilisi / თბილისი",
                "styleUrl": "#poly-FFD600-1200-77",
                "styleHash": "6bb11ed7",
                "styleMapHash": {
                    "normal": "#poly-FFD600-1200-77-normal",
                    "highlight": "#poly-FFD600-1200-77-highlight"
                },
                "description": "<img src=\"https://lh6.googleusercontent.com/ZYgi2VrecL0JfGytxMQX-geBV3Qpt3NDfwV8pZIPARSrC2tsqNKLBb4PbPUyIg3yeeNIHpfP02EWLgz_xJMkdD_kRgCuQcUfBeWo4MR7nSBX68LPPn2grYDchysOJf-KrDmuTg\" height=\"200\" width=\"auto\" /><br><br>The capital of the Country",
                "stroke": "#ffd600",
                "stroke-opacity": 1,
                "stroke-width": 1.2,
                "fill": "#ffd600",
                "fill-opacity": 0.30196078431372547,
                "gx_media_links": "https://lh6.googleusercontent.com/ZYgi2VrecL0JfGytxMQX-geBV3Qpt3NDfwV8pZIPARSrC2tsqNKLBb4PbPUyIg3yeeNIHpfP02EWLgz_xJMkdD_kRgCuQcUfBeWo4MR7nSBX68LPPn2grYDchysOJf-KrDmuTg"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    44.8091762,
                    41.6877396,
                    0
                ]
            },
            "properties": {
                "name": "Narikala Fortress",
                "styleUrl": "#icon-1502-0097A7",
                "styleHash": "-44da858d",
                "styleMapHash": {
                    "normal": "#icon-1502-0097A7-normal",
                    "highlight": "#icon-1502-0097A7-highlight"
                },
                "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                "description": "<img src=\"https://lh3.googleusercontent.com/GVOjs8YCNTSGqgMTLqtFiUW81OKDtK4rJ0eqOvnQXa4wiJxXCdHijKY6oXFkJWQlzrCd5R0AQycjxckdVuAY6xofJRJKS3QoqinVWcrySuuhPlWFmeWhrNowD8mzpGYnX9B8ow\" height=\"200\" width=\"auto\" /><br><br>",
                "gx_media_links": "https://lh3.googleusercontent.com/GVOjs8YCNTSGqgMTLqtFiUW81OKDtK4rJ0eqOvnQXa4wiJxXCdHijKY6oXFkJWQlzrCd5R0AQycjxckdVuAY6xofJRJKS3QoqinVWcrySuuhPlWFmeWhrNowD8mzpGYnX9B8ow"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    44.8010578,
                    41.6932838,
                    0
                ]
            },
            "properties": {
                "name": "Courtyard by Marriott Tbilisi",
                "styleUrl": "#icon-1602-0F9D58",
                "styleHash": "-38144d6c",
                "styleMapHash": {
                    "normal": "#icon-1602-0F9D58-normal",
                    "highlight": "#icon-1602-0F9D58-highlight"
                },
                "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                "description": "<img src=\"https://lh3.googleusercontent.com/gQ_lMQ9Te8f_YB5FfvAWtYQU_jUsqsoXAF359wN5Rsij0GkUdC19NQajx9bU3ICgPc99FcbxzSw-nlwDwOoQA_2aAeJm7klIyJklbJnrHQJEH7dK0vGk4c3iN_Jn8ch7XkySuBc\" height=\"200\" width=\"auto\" /><br><br>",
                "gx_media_links": "https://lh3.googleusercontent.com/gQ_lMQ9Te8f_YB5FfvAWtYQU_jUsqsoXAF359wN5Rsij0GkUdC19NQajx9bU3ICgPc99FcbxzSw-nlwDwOoQA_2aAeJm7klIyJklbJnrHQJEH7dK0vGk4c3iN_Jn8ch7XkySuBc"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    44.7872935,
                    41.7055714,
                    0
                ]
            },
            "properties": {
                "name": "Rooms",
                "styleUrl": "#icon-1602-0288D1",
                "styleHash": "359b3954",
                "styleMapHash": {
                    "normal": "#icon-1602-0288D1-normal",
                    "highlight": "#icon-1602-0288D1-highlight"
                },
                "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                "description": "<img src=\"https://lh6.googleusercontent.com/t0bHJaX6KDrxMnSDcpryj3InJziKKxjaKLitRRaN0Sqib8VQkTcEHgKbCXJmbertW1SFuHbbk-IbKlqByJyGTHWlxlrMKVgGtnTg0ZIC2wumQl94HarOFqB__28mFebjJoE4gQ\" height=\"200\" width=\"auto\" /><br><br>",
                "gx_media_links": "https://lh6.googleusercontent.com/t0bHJaX6KDrxMnSDcpryj3InJziKKxjaKLitRRaN0Sqib8VQkTcEHgKbCXJmbertW1SFuHbbk-IbKlqByJyGTHWlxlrMKVgGtnTg0ZIC2wumQl94HarOFqB__28mFebjJoE4gQ"
            }
        }
    ]
}

export default (props) => (
    <View style={styles.container}>
        <View style={{ height: 80, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 15 }}>
                <TouchableIcon onPress={() => props.navigation.pop()} IconName="ios-arrow-back" IconType={Ionicons} />
            </View>
            <View style={{ flex: 3 }}>
            </View>

        </View>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            onRegionChange={(e) => console.log(e)}
            region={{
                latitude: 41.71441108998681,
                longitude: 44.80167981237173,
                latitudeDelta: 0.3817676568656694,
                longitudeDelta: 0.2836912125349187,
            }}
        >
            <Geojson nav={props.navigation} geojson={alcatraz} />
        </MapView>
    </View>
); 