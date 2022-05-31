import React from 'react'
import { Modal, Text, View, Image, TouchableOpacity, ImageSourcePropType} from 'react-native'
import styles from './styles'

type Props = {
    imageUri: ImageSourcePropType,
    title: string,
    body: string,
    btnText: string,
    visible: boolean,
    setVisible: (visible: boolean) => void
}

const VerificationModal = ({ imageUri, title, body, btnText, visible, setVisible, ...rest }: Props) => {    

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(!visible)
            }}
            {...rest}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image
                        style={styles.image}
                        source={imageUri}
                    />
                    <Text style={styles.textHeader}>{title}</Text>
                    <Text style={styles.textBody}>{body}</Text>
                    <TouchableOpacity
                        style={styles.continueBtnContainer}
                        onPress={() => setVisible(!visible)}                
                    >
                        <Text style={styles.continueBtn}>{btnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )

}

export default VerificationModal
