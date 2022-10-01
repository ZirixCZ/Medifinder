import {ScrollView, Text, View, StyleSheet, Image} from "react-native";
import Header from "./Header/Header";
import Navbar from "./Navbar";
import React from "react";
import CustomDropdown from "./CustomDropdown";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];
const DocSearchField = ({navigation}) => {
    return (
        <Navbar navigation={navigation}>
            <Header
                header={"Hledat lékaře \npodle oboru"}
                subHeader="Hledejte lékaře podle zdravotnického oboru praxe."
            />
            <CustomDropdown
                data={countries}
                placeholder={"Vyberte obor..."}
                placeholderFinder={"Hledejte obor..."}
                onSelect={(item, index) => navigation.navigate("doctorsbyfield")}
                padding={20}
            />
        </Navbar>
    );
};

export default DocSearchField;
