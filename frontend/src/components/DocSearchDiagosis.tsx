import {StyleSheet, Text, View} from "react-native";
import Navbar from "./Navbar";
import Header from "./Header/Header";

const DocSearchDiagnosis = ({navigation}) => {
    return (
        <Navbar navigation={navigation}>
            <View style={styles.container}>
                <Header header="Hledat lékaře pomocí samodiagnózy" subHeader="Hledejte lékaře podle zadání vlastní diagnózy z nabídky." />
            </View>
        </Navbar>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100vh",
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
})

export default DocSearchDiagnosis;