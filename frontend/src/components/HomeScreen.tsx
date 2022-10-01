import React, {useState, useEffect} from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackComponent,
    View,
} from "react-native";
import {colorRed} from "../constants";
import Header from "./Header/Header";

const HomeScreen = ({navigation}) => {
    const [doctor, setDoctor] = useState(false);

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => setDoctor(false)}>
                <View style={[styles.container, doctor ? {opacity: 0.4} : {opacity: 1}]}>
                    <View style={{display: "flex", flexDirection: "row"}}>
                        <Image
                            style={[
                                styles.logoSmall,
                                {marginLeft: "3rem", marginRight: "0rem", marginBottom: "0rem", marginTop: "2rem"},
                            ]}
                            source={require("../../assets/MedifinderLogo.svg")}
                        />
                        <Image
                            style={[styles.logoTiny, {marginLeft: "0.5rem", marginBottom: "0rem", marginTop: "2.5rem"}]}
                            source={require("../../assets/Account.svg")}
                        />
                        <Image
                            style={[
                                styles.logoTiny,
                                {marginLeft: "0.5rem", marginRight: "3rem", marginBottom: "0rem", marginTop: "2.5rem"},
                            ]}
                            source={require("../../assets/Settings.svg")}
                        />
                    </View>
                    <View>
                        <Text style={styles.title}>Vítejte v appce</Text>
                        <View>
                            <Text style={styles.paragraph}>
                                Najděte lékaře ve svém okolí podle oboru nebo vaší samodiagnózy díky našemu průvodci.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.centerContainer}>
                        <TouchableWithoutFeedback onPress={() => setDoctor(!doctor)}>
                            <Image
                                style={[styles.logo, {marginTop: "2rem"}]}
                                source={require("../../assets/DocSearch.svg")}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("hotdoctorsinyourarea")}>
                            <Image
                                style={[styles.logo, {marginTop: "2rem"}]}
                                source={require("../../assets/DocMaps.svg")}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View
                style={
                    doctor
                        ? {
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              justifyContent: "center",
                              alignItems: "center",
                          }
                        : {display: "none"}
                }
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate("docsearchdiagnosis");
                        setDoctor(false);
                    }}
                >
                    <Image
                        style={[
                            styles.logo,
                            {marginBottom: "2rem", marginTop: "5rem"},
                            {borderWidth: 1, borderColor: "thistle", borderRadius: 20},
                        ]}
                        source={require("../../assets/docFieldSearch.svg")}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate("selfdiagnosesearch");
                        setDoctor(false);
                    }}
                >
                    <Image
                        style={[styles.logo, {borderWidth: 1, borderColor: "thistle", borderRadius: 20}]}
                        source={require("../../assets/docDiagnosisSearch.svg")}
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: "100%",
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    centerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
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
        marginBottom: "1rem",
    },
    logo: {
        width: 322,
        height: 196,
    },
    logoPadding: {
        paddingTop: "1rem",
    },
    logoSmall: {
        width: 223,
        height: 52,
    },
    logoTiny: {
        width: 35,
        height: 35,
    },
});

export default HomeScreen;
