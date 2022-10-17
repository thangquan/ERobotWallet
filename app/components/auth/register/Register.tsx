import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContainerView from '../../common/ContainerView'
import Constants from '../../../controller/Constants'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import TextNormal from '../../common/TextNormal'
import Colors from '../../../controller/Colors.d'
import Fonts from '../../../controller/Fonts.d'

type Props = {}

const Register = (props: Props) => {
    return (
        <ContainerView>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        style={styles.logoImage}
                        source={Constants.icons.robot}
                        resizeMode='contain'
                    />
                </View>
                <TextNormal style={styles.title}>Register</TextNormal>
            </View>
        </ContainerView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        marginTop: 10,
        alignSelf: 'center'
    },
    logoImage: {
        width: wp(100) - 50,
        height: wp(100) - 50,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 30,
        color: Colors.black,
        textAlign: 'center',
        fontFamily: Fonts.poppinsSemiBold
    }
})
