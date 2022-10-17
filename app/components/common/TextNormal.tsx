import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'

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
                ...props?.style
            }}>
            {children}
        </Text>
    )
}

export default TextNormal

const styles = StyleSheet.create({})
