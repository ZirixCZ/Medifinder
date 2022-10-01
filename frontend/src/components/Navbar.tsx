import {StackActions} from "@react-navigation/native";
import {View, Image, TouchableWithoutFeedback} from "react-native";

const Navbar = ({navigation, children}) => (
    <View>
        <View
            style={{
                display: "flex",
                height: "content",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
            }}
        >
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image
                    source={require("../../assets/BackButtonNavbar.svg")}
                    style={{margin: "1rem", width: 35, height: 35}}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.dispatch(StackActions.popToTop())}>
                <Image
                    source={require("../../assets/HomeButtonNavbar.svg")}
                    style={{margin: "1rem", width: 35, height: 35}}
                />
            </TouchableWithoutFeedback>
        </View>
        <View style={{display: "flex", padding: 15}}>{children}</View>
    </View>
);

export default Navbar;
