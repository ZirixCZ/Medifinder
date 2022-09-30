import React, {useState, useEffect} from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight, TouchableWithoutFeedback,
    TouchableWithoutFeedbackComponent,
    View
} from "react-native";
import {colorRed} from "../constants";
import Header from "./Header/Header";

const HomeScreen = ({navigation}) => {

    const [doctor, setDoctor] = useState(false);

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => console.log("false")}>
            <View style={[styles.container, doctor ? {opacity: 0.4} : {opacity: 1}]}>
                <Header header="Vítejte v appce" subHeader="Najděte lékaře ve svém okolí podle oboru nebo vaší samodiagnózy díky našemu průvodci."/>
                <View style={styles.centerContainer}>
                    <TouchableWithoutFeedback onPress={() => setDoctor(!doctor)}>
                        <Image style={styles.logo} source={require('../../assets/DocSearch.svg')} />
                    </TouchableWithoutFeedback>
                    <Image style={styles.logo} source={require('../../assets/DocMaps.svg')} />
                </View>
            </View>
            </TouchableWithoutFeedback>
            <View style={doctor ? {position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'} : {display: "none"}}>
                <TouchableWithoutFeedback onPress={() => {navigation.navigate("docsearchfield"); setDoctor(false)}}>
                    <Image style={[styles.logo, {marginBottom: "4.5rem"}]} source={require('../../assets/docFieldSearch.svg')} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {navigation.navigate("docsearchdiagnosis"); setDoctor(false)}}>
                    <Image style={styles.logo} source={require('../../assets/docDiagnosisSearch.svg')} />
                </TouchableWithoutFeedback>
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
