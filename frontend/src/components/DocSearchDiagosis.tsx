import {StyleSheet, Text, View} from "react-native";
import Navbar from "./Navbar";
import Header from "./Header/Header";
import React from "react";

const DocSearchDiagnosis = ({navigation}) => {
    return (
        <Navbar navigation={navigation}>
            <View style={styles.container}>
                <View style={{paddingLeft: 15}}>
                    <Text style={styles.title}>Vítejte v appce</Text>
                    <View>
                        <Text style={styles.paragraph}>Najděte lékaře ve svém okolí podle oboru nebo vaší samodiagnózy díky našemu průvodci.</Text>
                    </View>
                </View>
            </View>
        </Navbar>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100vh",
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
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
})

export default DocSearchDiagnosis;