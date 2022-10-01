import React, {useEffect, useState} from "react";
import {Text, TextInput, View} from "react-native";
import {symptoms} from "../constants";
import Header from "./Header/Header";
import Navbar from "./Navbar";
import CustomDropdown from "./CustomDropdown";

const gender = ["Muž", "Žena"];
const DocSearchField = ({navigation}) => {

    const [pickedSymptom, setPickedSymptom] = useState("aaa");
    const [age, setAge] = useState(null);

    useEffect(() => {
        // fetch("http://localhost:8080/symptoms").then((res) => {
        //     res.json().then((res) => {
        //
        //     })
        // })
    }, [])

    useEffect(()=> {
        console.log('123')
        console.log(pickedSymptom)
    }, [pickedSymptom])

    return (
        <Navbar navigation={navigation}>
            <Header
                header={"Hledat lékaře \npodle oboru"}
                subHeader="Hledejte lékaře podle zdravotnického oboru praxe."
            />
            <View style={{display: "flex", justifyContent: "center", marginTop: "2rem"}}>
                <View style={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                    <View style={{display: "flex", flexDirection: "column"}}>
                        <Text style={{marginLeft: "1rem"}}>Váš věk</Text>
                        <TextInput
                            style={{height: 40, borderWidth: 1, margin: 12, marginLeft: "1rem", padding: 12}}
                            onChangeText={() => setAge}
                            value={age}
                            maxLength={3}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={{display: "flex", flexDirection: "column", marginTop: "1rem"}}>
                        <Text style={{marginLeft: "1rem"}}>Váše pohlaví</Text>
                        <CustomDropdown
                            data={gender}
                            placeholder={"Váše pohlaví"}
                            placeholderFinder={"Váše pohlaví"}
                            onSelect={(item, index) => navigation.navigate("doctorsbyfield")}
                            padding={12}
                        />
                    </View>
                    <View style={{display: "flex", flexDirection: "column", marginTop: "1rem"}}>
                        <Text style={{marginLeft: "1rem"}}>{symptoms[pickedSymptom]?.Name}</Text>
                        <CustomDropdown
                            data={symptoms}
                            placeholder={"Symptomy"}
                            placeholderFinder={"Symptomy"}
                            onSelect={(item, index) => {setPickedSymptom(index); console.log("abcdfrantisek"); console.log(item.Name)}}
                            // rowToTextParsing={(item, index) => item.Name}
                            padding={12}
                        />
                    </View>
                </View>
            </View>
        </Navbar>
    );
};

export default DocSearchField;
