import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../../../../controller/Colors'

type Props = {
    placeholder: string
    value: string
    onChangeText: any
    icon: any
}

const InputAuth = ({ placeholder, value, onChangeText, icon }: Props) => {
    return (
        <View style={styles.viewInput}>
            <Image source={icon} style={styles.icon} />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={Colors.placeholderText}
                style={styles.input}
            />
        </View>
    )
}

export default InputAuth

const styles = StyleSheet.create({
    viewInput: {
        marginTop: 16,
        height: 50,
        backgroundColor: Colors.white,
        borderRadius: 25,
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    icon: {
        width: 32,
        height: 32,
        resizeMode: 'contain'
    },
    input: {
        paddingHorizontal: 20,
        flex: 1,
        height: 50,
        backgroundColor: Colors.white,
        borderRadius: 25,
        fontSize: 15
    }
})
