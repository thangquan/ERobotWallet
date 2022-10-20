import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import TextNormal from './TextNormal'
import Fonts from '../../controller/Fonts'

type Props = {
    label: string
    onPress: () => void
    containerStyle?: ViewStyle
    labelStyle?: TextStyle
}

const Button = ({ label, containerStyle, labelStyle, onPress }: Props) => {
    return (
        <TouchableOpacity style={{ ...styles.button, ...containerStyle }} onPress={onPress}>
            <TextNormal style={{ ...styles.buttonText, ...labelStyle }}>{label}</TextNormal>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 40,
        backgroundColor: '#191C32',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
        fontFamily: Fonts.poppinsBold
    }
})
