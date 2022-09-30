import {StyleSheet, Text, View} from "react-native";
import React from "react";

const Header = (props) => {
    return (
        <View>
            <Text style={styles.title}>{props.header}</Text>
            <View>
                <Text style={styles.paragraph}>{props.subHeader}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
});

export default Header;