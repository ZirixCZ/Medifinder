import {Image, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import Navbar from "./Navbar";
import Header from "./Header/Header";
import React from "react";

const DoctorsByField = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Navbar navigation={navigation}>
                <View style={{paddingLeft: 15, paddingRight: 0}}>
                    <Text style={{fontSize: 16, paddingBottom: 20}}>
                        Výsledky hledání lékařů podle
                        {"\n"}
                        filtrovaného oboru.
                    </Text>
                    <Text style={{fontSize: 16, width: "90%"}}>
                        Podrobnosti zobrazíte kliknutím na kartu s lékařem.
                    </Text>
                    <Text style={{fontSize: 16, color: "gray", width: "90%"}}>
                        {"\n"}
                        Počet výsledků: 3
                    </Text>
                </View>
                <View
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <Image style={[styles.card, {marginTop: "2rem"}]} source={require("../../assets/Doctor1.svg")} />
                    <Image style={styles.card} source={require("../../assets/Doctor2.svg")} />
                    <Image style={styles.card} source={require("../../assets/Doctor3.svg")} />
                </View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate("hotdoctorsinyourarea");
                    }}
                >
                    <Image
                        style={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: 120,
                            borderTopRightRadius: 50,
                            borderTopLeftRadius: 50,
                        }}
                        source={require("../../assets/MapBottom.svg")}
                    />
                </TouchableWithoutFeedback>
            </Navbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100vh",
        backgroundColor: "#fff",
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
        marginBottom: "1rem",
    },
    warningSquare: {
        backgroundColor: "#FF9900",
        borderRadius: 32,
        marginBottom: "2rem",
        width: "20rem",
        height: "6rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 115,
        borderRadius: 32,
        elevation: 3,
        backgroundColor: "#BDBDBD",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
        textAlign: "left",
    },
    card: {
        marginTop: "1rem",
        height: 125,
        width: 322,
    },
});

export default DoctorsByField;
