import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

type Props = {
    children: React.ReactElement
}

const ContainerView = ({ children }: Props) => {
    return (
        <SafeAreaView
            style={{
                flex: 1
            }}>
            <View style={{ flex: 1 }}>{children}</View>
        </SafeAreaView>
    )
}

export default ContainerView

const styles = StyleSheet.create({})
