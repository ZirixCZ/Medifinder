import {Platform, View, ActivityIndicator} from "react-native";
import {ExpoLeaflet, MapMarker} from "expo-leaflet";
import Navbar from "./Navbar";
import React from "react";

const HotDoctorsInYourAreaMap = ({navigation}) => (
    <Navbar navigation={navigation}>
        <View style={{height: "88vh", marginTop: "-25px"}}>
            <ExpoLeaflet
                loadingIndicator={() => <ActivityIndicator />}
                mapCenterPosition={{
                    lat: 50.0343,
                    lng: 15.7812,
                }}
                mapLayers={[
                    {
                        attribution: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                        baseLayerIsChecked: true,
                        baseLayerName: "OpenStreetMap",
                        layerType: "TileLayer",
                        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    },
                    {
                        baseLayerIsChecked: true,
                        baseLayer: true,
                        baseLayerName: "Mapbox",
                        layerType: "TileLayer",
                        url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2hlcmVzbXl3YXZlcyIsImEiOiJjanJ6cGZtd24xYmU0M3lxcmVhMDR2dWlqIn0.QQSWbd-riqn1U5ppmyQjRw`,
                    },
                ]}
                mapMarkers={
                    [
                        {
                            id: "1",
                            position: {lat: 50.03310632, lng: 15.9},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "2",
                            position: {lat: 50.13310632, lng: 15.7},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "3",
                            position: {lat: 50.10310632, lng: 15.5},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "4",
                            position: {lat: 50.00310632, lng: 15.6},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "5",
                            position: {lat: 49.90310632, lng: 16.0},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "6",
                            position: {lat: 49.90310632, lng: 15.9},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "7",
                            position: {lat: 50.0343, lng: 15.7812},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "8",
                            position: {lat: 50.0443, lng: 15.7512},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "9",
                            position: {lat: 50.0443, lng: 15.7512},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "10",
                            position: {lat: 50.0202, lng: 15.7612},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "11",
                            position: {lat: 50.0382, lng: 15.7612},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "12",
                            position: {lat: 50.0382, lng: 15.7912},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "13",
                            position: {lat: 50.0382, lng: 15.7912},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                        {
                            id: "14",
                            position: {lat: 50.0382, lng: 15.8012},
                            icon: `
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9 1a8.6 8.6 0 00-8.6 8.6c0 4.35 7.2 12.05 8.42 13.33a.24.24 0 00.35 0c1.22-1.27 8.42-9 8.42-13.33A8.6 8.6 0 0011.9 1zm0 11.67A3.07 3.07 0 1115 9.6a3.07 3.07 0 01-3.1 3.07z"/>
            </svg>`,
                            size: [24, 24],
                        },
                    ] as MapMarker[]
                }
                mapOptions={{
                    attributionControl: false,
                    zoomControl: Platform.OS === "web",
                }}
                maxZoom={18}
                onMessage={(message) => {
                    switch (message.tag) {
                        case "onMapMarkerClicked":
                            navigation.navigate("doctorsbyfieldinformation");
                            break;
                    }
                }}
                zoom={12}
            />
        </View>
    </Navbar>
);

export default HotDoctorsInYourAreaMap;
