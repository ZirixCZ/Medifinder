import {Image, StyleSheet, Text, View} from "react-native";
import Navbar from "./Navbar";
import React from "react";
import {colorRed} from "../constants";

const DoctorsByFieldInformation = ({navigation}) => {
    return (
        <View style={styles.container}>

            <Navbar navigation={navigation}>
                <View style={{display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%"}}>
                    <Image style={{height: 58, width: 58, margin: "-5rem"}}
                           source={require('../../assets/DoctorSymbol.svg')}/>
                </View>
                <View style={styles.informationContainer}>
                    <Text style={styles.headerRedBold}>MUDr. Jana Drašnarová</Text>
                    <Text style={[styles.paragraph, {fontSize: 20}]}>praktická lékařka pro dospělé<br/></Text>
                    <Text style={[styles.paragraph, {fontSize: 18}]}>Devotyho 559, Pardubice 2<br/></Text>
                    <Image style={{height: 24, width: 120, margin: "0.75rem"}}
                           source={require('../../assets/Stars.svg')}/>
                </View>
                <View style={{
                    height: 'content',
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}>
                    <Image style={[styles.timetable, {marginTop: "2rem"}]}
                           source={require('../../assets/Timetable.svg')}/>
                    <View style={{display: "flex", justifyContent: "flex-start", width: "100%"}}>
                        <Image style={{marginTop: "0.75rem", marginLeft: "1.5rem", width: 176, height: 34}}
                               source={require('../../assets/PhoneNumber.svg')}/>
                        <Image style={{marginTop: "0.75rem", marginLeft: "1.5rem", width: 206, height: 34}}
                               source={require('../../assets/EmailAddress.svg')}/>
                        <Text style={{fontSize: 20, color: colorRed, fontWeight: "bold", marginLeft: "2rem", marginTop: "1.5rem"}}>Popis lékaře:</Text>
                        <Text style={{fontSize: 16, color: "#666666", marginLeft: "2rem", marginTop: "0.5rem"}}>Jsem praktická lékařka pro dospělé sídlící v poliklinice Devotyho. Aktuálně stále přijímám nové pacienty.</Text>
                        <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Image style={{marginTop: "0.75rem", width: 322, height: 127}}
                                   source={require('../../assets/PhotosOfOffice.svg')}/>
                        </View>
                        <Text style={{fontSize: 20, color: colorRed, fontWeight: "bold", marginLeft: "2rem", marginTop: "2rem"}}>Jak se tam dostat:</Text>
                        <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

                        <Image style={{marginTop: "0.75rem", width: 322, height: 127}}
                               source={require('../../assets/MapOfDoctors.svg')}/>
                        <Image style={{marginTop: "0.75rem", width: 342, height: 145}}
                               source={require('../../assets/MHDTable.svg')}/>
                        <Image style={{marginTop: "1rem", width: 182, height: 32}}
                               source={require('../../assets/NotificationOptions.svg')}/>
                            <Image style={{marginTop: "0.75rem", marginBottom: "2rem", width: 90, height: 32}}
                                   source={require('../../assets/Share.svg')}/>
                        </View>
                    </View>
                </View>
            </Navbar>
        </View>
    )
}

const styles = StyleSheet.create({
    informationContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

    },
    headerRedBold: {
        fontSize: 26,
        fontWeight: "bold",
        color: colorRed
    },
    container: {
        height: "100vh",
        backgroundColor: "#fff",
    },
    paragraph: {
        fontWeight: "500",
        color: "gray",
    },
    title: {
        fontWeight: "900",
        fontSize: 32,
        margin: "3rem",
        marginBottom: "1rem"
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
        justifyContent: "space-evenly"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 115,
        borderRadius: 32,
        elevation: 3,
        backgroundColor: '#BDBDBD',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: "white",
        textAlign: "left"
    },
    timetable: {
        height: 177,
        width: 322,
    },
})

export default DoctorsByFieldInformation