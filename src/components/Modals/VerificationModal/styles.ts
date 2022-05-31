import { windowHeight, windowWidth } from "@utils/Dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,        
    },
    modalView: {
        margin: 10,
        backgroundColor: '#E2E6ED',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: windowWidth / 1.3,
        height: windowHeight / 1.9,
    },
    image: {
        width: 120,
        height: 120,                    
        resizeMode: 'contain'        
    },            
    textHeader: {        
        fontFamily: 'Poppins',
        fontSize: 22,
        textAlign: 'center',
        color: '#080808'
    },
    textBody: {
        fontFamily: 'Poppins',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: '#323232'
    },
    continueBtnContainer: {
        marginTop: 5,
        marginBottom: 15,
        width: windowWidth / 1.6,
        height: windowHeight / 12,
        backgroundColor: '#FFA451',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    continueBtn: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Poppins'  
    }
})

export default styles
