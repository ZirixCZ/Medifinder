import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./src/components/HomeScreen";
import PokusScreen from "./src/components/PokusScreen";
import DocSearchField from "./src/components/DocSearchField";
import DocSearchDiagnosis from "./src/components/DocSearchDiagnosis";
import DoctorsByField from "./src/components/DoctorsByField";
import DoctorsByFieldInformation from "./src/components/DoctorsByFieldInformation";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <View style={{backgroundColor: "white"}}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="doctorsbyfieldinformation" component={DoctorsByFieldInformation} />
                <Stack.Screen name="doctorsbyfield" component={DoctorsByField} />
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="docsearchdiagnosis" component={DocSearchDiagnosis} />
                <Stack.Screen name="pokus" component={PokusScreen} />
                <Stack.Screen name="docsearchfield" component={DocSearchField} />
            </Stack.Navigator>
        </NavigationContainer>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;
