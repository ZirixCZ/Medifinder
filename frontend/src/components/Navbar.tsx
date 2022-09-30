import {StyleSheet, Text, View, Button, Image} from "react-native";

const Navbar = ({navigation, children}) => (
    <View>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", padding: 15}}>
            <Image source={require("../../assets/BackButtonNavbar.svg")} style={{width: 35, height: 35}} />
            <Image source={require("../../assets/HomeButtonNavbar.svg")} style={{width: 35, height: 35}} />
        </View>
        <View style={{flex: 1, padding: 15}}>{children}</View>
    </View>
);

export default Navbar;
