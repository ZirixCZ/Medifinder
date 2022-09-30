import {StyleSheet, Text, View} from "react-native";
import React from "react";

const Header = (props) => {
    return (
        <View style={{paddingLeft: 15, paddingRight: 0}}>
            <Text style={{fontSize: 24, fontWeight: "bold", paddingBottom: 20}}>{props.header}</Text>
            <Text style={{fontSize: 16, color: "gray", width: "90%"}}>{props.subHeader}</Text>
        </View>
    )
}

export default Header;