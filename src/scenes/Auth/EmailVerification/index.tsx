import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import VerificationModal from '@components/Modals/VerificationModal'
import styles from './styles'
import { hideEmail } from '@utils/strings'

const images = {
    completedIcon: require('@assets/images/complete.png'),
    failedIcon: require('@assets/images/failed.png')
}

const words = {
    succes: {
        title: 'Welcome Faza',
        body: 'You have successfully verified your account',
        btn: 'Continue'
    },
    failed: {
        title: 'Error!',
        body: 'The OTP you entered could not be authenticated',
        btn: 'Try Again'
    }
}

export const EmailVerification = () => {

    const [otp, setOtp] = useState('')
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)	

    const sendOtpCode = () => {
        if(otp === '1234') {
            setSuccess(true)            
        } else {
            setSuccess(false)
        }
        
        setModalVisible(!modalVisible)
    }    

    return (
        <View style={styles.container}>
            <Image
                source={require('@assets/images/email-verification.png')}
                style={styles.image}
            />
            <Text style={styles.header}>
                Enter Verification Code
            </Text>
            <Text style={styles.content}>
                Enter code that we have sent to your email { hideEmail('nurfaizi.faza@gmail.com') }
            </Text>
            <OTPInputView
                style={{ width: '80%', height: 100 }}
                pinCount={4}
                code={otp}
                autoFocusOnLoad={true}
                codeInputFieldStyle={styles.borderStyleBase}
                codeInputHighlightStyle={styles.borderStyleHighLighted}                
                onCodeChanged={code => {setOtp(code)}}                         
            />
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => sendOtpCode()}                
            >
                <Text style={styles.button}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.resendBtn}
                onPress={() => console.log('touch')}
            >
                <Text style={{ color: '#FFA451', fontSize: 18 }}>Resend Code</Text>
            </TouchableOpacity>
            <VerificationModal
                imageUri={success ? images.completedIcon : images.failedIcon}
                title={success ? words.succes.title : words.failed.title}
                body={success ? words.succes.body : words.failed.body}
                btnText={success ? words.succes.btn : words.failed.btn}
                visible={modalVisible}
                setVisible={setModalVisible}
            />
        </View>
    )
}
