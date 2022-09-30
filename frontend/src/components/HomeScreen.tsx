import {StyleSheet, Text, View, Button} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Home Screen</Text>
            <Button title="pokus screen" onPress={() => navigation.navigate("pokus")} />
        </View>
    );
};

export default HomeScreen;
