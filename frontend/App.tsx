import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./src/components/HomeScreen";
import SelfDiagnosesSearch from "./src/components/SelfDiagnosesSearch";
import DocSearchDiagnosis from "./src/components/DocSearchDiagnosis";
import DoctorsByField from "./src/components/DoctorsByField";
import DoctorsByFieldInformation from "./src/components/DoctorsByFieldInformation";
import DiagnoseTypeOfIllness from "./src/components/DiagnoseTypeOfIllness";
import HotDoctorsInYourAreaMap from "./src/components/HotDoctorsInYourAreaMap";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <View style={{backgroundColor: "white"}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="home" component={HomeScreen} />
                    <Stack.Screen name="docsearchdiagnosis" component={DocSearchDiagnosis} />
                    <Stack.Screen name="selfdiagnosesearch" component={SelfDiagnosesSearch} />
                    <Stack.Screen name="doctorsbyfield" component={DoctorsByField} />
                    <Stack.Screen name="doctorsbyfieldinformation" component={DoctorsByFieldInformation} />
                    <Stack.Screen name="DiagnoseTypeOfIllness" component={DiagnoseTypeOfIllness} />
                    <Stack.Screen name="hotdoctorsinyourarea" component={HotDoctorsInYourAreaMap} />
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
