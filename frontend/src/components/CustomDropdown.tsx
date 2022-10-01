import {ScrollView, Text, View, StyleSheet, Image} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {colorRed} from "../constants";

const CustomDropdown = ({
    data,
    placeholder,
    placeholderFinder,
    onSelect,
    rowToTextParsing = (item, index) => item,
    padding = 10,
}) => (
    <View style={{padding: padding}}>
        <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => {
                onSelect(selectedItem, index);
            }}
            defaultButtonText={placeholder}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
            }}
            rowTextForSelection={rowToTextParsing}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
                return (
                    <FontAwesome
                        name={isOpened ? "chevron-up" : "chevron-down"}
                        color={colorRed}
                        size={18}
                        style={{paddingRight: 10}}
                    />
                );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            search
            searchInputStyle={styles.dropdown1searchInputStyleStyle}
            searchPlaceHolder={placeholderFinder}
            searchPlaceHolderColor={"darkgrey"}
            renderSearchInputRightIcon={() => {
                return <Image source={require("../../assets/FinderVector.svg")} style={{width: 20, height: 20}} />;
            }}
        />
    </View>
);

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        width: "80%",
        height: 50,
        backgroundColor: "#F6F6F6",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        paddingLeft: 10,
    },
    dropdown1BtnTxtStyle: {color: "#DE091C", textAlign: "left"},
    dropdown1DropdownStyle: {backgroundColor: "#F6F6F6", borderRadius: 12},
    dropdown1RowStyle: {backgroundColor: "#F6F6F6", borderBottomColor: "#C5C5C5"},
    dropdown1RowTxtStyle: {color: "#DE091C", textAlign: "left"},
    dropdown1SelectedRowStyle: {backgroundColor: "rgba(0,0,0,0.1)"},
    dropdown1searchInputStyleStyle: {
        backgroundColor: "#F6F6F6",
        borderRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#444",
    },
});

export default CustomDropdown;
