import React, {useState, useEffect} from "react";
import {Button, Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {colorRed} from "../constants";

const HomeScreen = ({navigation}) => {

    const [doctor, setDoctor] = useState(false);

    return (
        <View>
            <View style={[styles.container, doctor ? {opacity: 0.4} : {opacity: 1}]}>
                <Text style={styles.title}>Vítejte v appce</Text>
                <View style={styles.paragraphContainer}>
                    <Text style={styles.paragraph}>Najděte lékaře ve svém okolí podle oboru nebo vaší samodiagnózy díky
                        našemu průvodci.</Text>
                </View>
                <View style={styles.centerContainer}>
                    <TouchableHighlight onPress={() => setDoctor(!doctor)}>
                        <Image style={styles.logo} source={require('../../assets/DocSearch.svg')} />
                    </TouchableHighlight>
                    <Image style={styles.logo} source={require('../../assets/DocMaps.svg')} />
                </View>
                <View style={doctor ? {display: "flex"} : {display: "none"}}>
                    <Image style={styles.logo} source={require('../../assets/DocMaps.svg')} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: "100vh",
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    centerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%"
    },
    paragraphContainer: {},
    paragraph: {
        fontWeight: "500",
        fontSize: 16,
        color: "gray",
        marginLeft: "3rem",
        width: "75%",
    },
    title: {
        fontWeight: "900",
        fontSize: 32,
        margin: "3rem",
        marginBottom: "1rem"
    },
    logo: {
        width: 322,
        height: 196,
    },
});

export default HomeScreen;
