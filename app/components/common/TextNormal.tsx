import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'
import Fonts from '../../controller/Fonts'

type Props = {
    children: React.ReactNode
    style?: TextStyle
}

const TextNormal = ({ children, ...props }: Props) => {
    return (
        <Text
            {...props}
            style={{
                includeFontPadding: true,
                fontFamily: Fonts.poppinsMedium,
                ...props?.style
            }}>
            {children}
        </Text>
    )
}

export default TextNormal

const styles = StyleSheet.create({})
