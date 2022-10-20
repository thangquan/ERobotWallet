import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ContainerView from '../../common/ContainerView'
import Constants from '../../../controller/Constants'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import TextNormal from '../../common/TextNormal'
import Colors from '../../../controller/Colors'
import Fonts from '../../../controller/Fonts'
import InputAuth from './components/InputAuth'
import Button from '../../common/Button'

type Props = {}

type SocialButton = {
    icon: _SourceUri
    onPress?: () => void
}

const SocialButton = ({ icon, onPress }: SocialButton) => {
    return (
        <TouchableOpacity style={styles.btnSocial} onPress={onPress}>
            <Image source={icon} style={styles.socialIcon} />
        </TouchableOpacity>
    )
}

const Register = (props: Props) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

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
                <InputAuth
                    value={name}
                    onChangeText={setName}
                    placeholder='Username'
                    icon={Constants.icons.user}
                />
                <InputAuth
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email'
                    icon={Constants.icons.email}
                />
                <InputAuth
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Password'
                    icon={Constants.icons.password}
                />
                <Button
                    label='Register'
                    onPress={() => {}}
                    containerStyle={{
                        marginTop: 25,
                        marginHorizontal: 25
                    }}
                />
                <View style={styles.viewSocialLogin}>
                    <SocialButton icon={Constants.icons.facebook} />
                    <SocialButton icon={Constants.icons.google} />
                </View>
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
        fontFamily: Fonts.poppinsSemiBold,
        marginBottom: 15
    },
    viewSocialLogin: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btnSocial: {
        width: 54,
        height: 54,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    socialIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    }
})
