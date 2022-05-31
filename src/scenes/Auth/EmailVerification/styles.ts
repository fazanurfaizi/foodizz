import { windowHeight, windowWidth } from "@utils/Dimensions"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {       
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 20,
        backgroundColor: '#FFFFFF'
    },
    image: {
        width: 120,
        height: 120,    
        marginTop: 10,    
        marginBottom: 10,
        resizeMode: 'contain'        
    },       
    header: {
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#090A0A',
        marginTop: 10,
        marginBottom: 10
    },
    content: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 'normal',
        color: '#090A0A'
    },
    borderStyleBase: {
        width: 45,
        height: 45,
        fontFamily: 'Poppins',
        fontSize: 24,
        color: '#090A0A',
        backgroundColor: '#F1F4FA',
        borderRadius: 8
    },    
    borderStyleHighLighted: {
        borderColor: "#FFA451",   
        backgroundColor: '#F1F4FA' 
    },           
    btnContainer: {
        marginTop: 5,
        marginBottom: 15,
        width: windowWidth / 1.4,
        height: windowHeight / 12,
        backgroundColor: '#FFA451',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    button: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Poppins'        
    },
    resendBtn: {                                    
        padding: 1,
        marginTop: 5,        
        width: windowWidth / 1.5,
        height: windowHeight / 15,          
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default styles
