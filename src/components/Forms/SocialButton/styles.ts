import { windowHeight, windowWidth } from "@utils/Dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 8
    },
    iconWrapper: {
        width: 30, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontWeight: 'bold'
    },
    btnWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    }
})

export default styles
