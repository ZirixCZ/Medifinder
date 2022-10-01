import React, {useEffect, useState} from "react";
import {Button, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {colorRed, symptoms} from "../constants";
import Header from "./Header/Header";
import Navbar from "./Navbar";
import CustomDropdown from "./CustomDropdown";

const SelfDiagnosesSearch = ({navigation}) => {
    const [symptom, setSymptom] = useState(null);
    const [symptom1, setSymptom1] = useState(null);
    const [age, setAge] = useState(undefined);
    const [gender, setGender] = useState(null);

    useEffect(() => {
        // fetch("http://localhost:8080/symptoms").then((res) => {
        //     res.json().then((res) => {
        //
        //     })
        // })
    }, []);

    useEffect(() => {
        console.log("123");
        console.log(symptom);
    }, [symptom]);

    return (
        <Navbar navigation={navigation}>
            <Header
                header={"Hledat lékaře\npomocí samodiagnózy"}
                subHeader="Hledejte lékaře podle zdravotnického oboru praxe."
            />
            <View
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2rem",
                    height: "calc(100vh - 300px)",
                }}
            >
                <View style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                    <View style={{display: "flex", flexDirection: "column"}}>
                        <Text style={{marginLeft: "1rem"}}>Váš věk</Text>
                        <TextInput
                            style={{
                                borderRadius: 7,
                                height: 40,
                                borderWidth: 1,
                                margin: 12,
                                marginLeft: "1rem",
                                padding: 12,
                            }}
                            onChangeText={(e) => setAge(e)}
                            value={age}
                            maxLength={3}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{display: "flex", flexDirection: "column", marginTop: "1rem"}}>
                        <Text style={{marginLeft: "1rem"}}>Váše pohlaví</Text>
                        <CustomDropdown
                            data={["Muž", "Žena"]}
                            placeholder={"Váše pohlaví"}
                            placeholderFinder={"Váše pohlaví"}
                            onSelect={(item, index) => setGender(item)}
                            padding={12}
                        />
                    </View>
                    <View style={{display: "flex", flexDirection: "column", marginTop: "1rem"}}>
                        <Text style={{marginLeft: "1rem"}}>Vyberte symptom</Text>
                        <CustomDropdown
                            data={symptoms}
                            placeholder={"Symptomy"}
                            placeholderFinder={"Symptomy"}
                            onSelect={(item, index) => setSymptom(item)}
                            padding={12}
                        />
                    </View>
                    <View
                        style={[
                            symptom ? {display: "flex"} : {display: "none"},
                            {flexDirection: "column", marginTop: "1rem"},
                        ]}
                    >
                        <Text style={{marginLeft: "1rem"}}>Vyberte symptom</Text>
                        <CustomDropdown
                            data={symptoms}
                            placeholder={"Symptomy"}
                            placeholderFinder={"Symptomy"}
                            onSelect={(item, index) => setSymptom1(item)}
                            padding={12}
                        />
                    </View>
                </View>
                <Pressable
                    style={[
                        styles.button,
                        symptom && symptom1 && age !== undefined && age >= 0 && age <= 120 && gender
                            ? {backgroundColor: colorRed}
                            : {backgroundColor: "#BDBDBD"},
                    ]}
                    onPress={() =>
                        symptom && symptom1 && age !== undefined && age >= 0 && age <= 120 && gender
                            ? navigation.navigate("DiagnoseTypeOfIllness")
                            : null
                    }
                >
                    <Text style={styles.text}>Pokračovat</Text>
                </Pressable>
            </View>
        </Navbar>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 115,
        borderRadius: 32,
        elevation: 3,
    },
    text: {
        color: "white",
    },
});

export default SelfDiagnosesSearch;
