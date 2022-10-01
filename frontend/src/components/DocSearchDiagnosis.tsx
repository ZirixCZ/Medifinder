import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import Navbar from "./Navbar";
import Header from "./Header/Header";
import React, {useState} from "react";
import CustomDropdown from "./CustomDropdown";
import {colorRed, symptoms} from "../constants";

const DocSearchDiagnosis = ({navigation}) => {

    const [field, setField] = useState(null);

    return (
        <View style={styles.container}>

            <Navbar navigation={navigation}>
                <View>
                    <Header header={"Hledat lékaře\npodle oboru"}
                            subHeader="Hledejte lékaře podle zadání vlastní diagnózy z nabídky."/>
                </View>
                <View style={{
                    height: 'calc(100vh - 250px)',
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }}>
                    <View style={{display: "flex", flexDirection: "column", width: "100%", marginTop: "2rem"}}>
                        <CustomDropdown
                            data={symptoms}
                            placeholder={"Hledej příznak"}
                            placeholderFinder={"Hledej příznak"}
                            onSelect={(item, index) => setField(item)}
                            padding={12}
                        />
                    </View>
                    <View style={{display: "flex", justifyContent: "flex-end", alignItems: "center", height: "75%"}}>
                        <View style={styles.warningSquare}>
                            <Image style={styles.logoInline} source={require('../../assets/TriangleWarning.svg')}/>
                            <Text style={[styles.text, {fontSize: 14, lineHeight: 17, width: "15rem"}]}>Výsledky
                                diagnózy jsou pouze orientační a nejedná se o profesionální lékařské vyšetření. Klikněte
                                zde pro více info.</Text>
                        </View>
                        <Pressable style={[styles.button, field ? {backgroundColor: colorRed} : {backgroundColor: '#BDBDBD'}]}>
                            <Text style={styles.text}>Pokračovat</Text>
                        </Pressable>
                    </View>
                </View>
            </Navbar>
        </View>

    )
}

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
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: "white",
        textAlign: "left"
    },
    logoInline: {
        height: 41,
        width: 41,
    }
})

export default DocSearchDiagnosis;