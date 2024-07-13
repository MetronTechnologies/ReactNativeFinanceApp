import React, {useLayoutEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar} from "react-native";
import {defaultStyles} from "../../constants/Styles.ts";
import {LoginScreenStyles} from "./LoginScreenStyles.ts";
import Colors from "../../constants/Colors.ts";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

enum SignInType{
    Phone,
    Email,
    Google,
    Apple
}


const LoginScreen = () => {
    const [countryCode, setCountryCode] = useState('+49');
    const [phoneNumber, setPhoneNumber] = useState('')
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 50 : 0;
    const [signInType, setSignInType] = useState()
    const login = (type: SignInType) => {

    }
    const styles = LoginScreenStyles;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: '',
            headerBackTitle: '',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: Colors.background},
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <FAIcon
                        name={'arrow-left'}
                        size={30}
                        color={Colors.dark}
                    />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('HelpScreen')}
                >
                    <AntDesign
                        name={'questioncircleo'}
                        size={30}
                        color={Colors.dark}
                    />
                </TouchableOpacity>
            )
        })
    }, []);

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={'padding'}
            keyboardVerticalOffset={keyboardVerticalOffset}
        >
            <StatusBar
                animated={true}
                backgroundColor={Colors.background}
                hidden={false}
                translucent={false}
                barStyle={'dark-content'}
            />
            <View style={defaultStyles.container}>
                <Text style={[defaultStyles.header, {color: '#000'}]}>
                    Welcome back
                </Text>
                <Text style={defaultStyles.descriptionText}>
                    Enter the phone number associated to your account
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={'Country Code'}
                        placeholderTextColor={Colors.gray}
                        value={countryCode}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder={'Mobile Number'}
                        keyboardType={'numeric'}
                        placeholderTextColor={Colors.gray}
                        value={phoneNumber}
                        style={[styles.input, {
                            flex: 1
                        }]}
                        onChangeText={(e) => setPhoneNumber(e)}
                    />
                </View>
                <View style={styles.signUpContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={defaultStyles.textLink}>
                            Don't have an account? Sign Up
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.signUpButton,
                            phoneNumber !== '' ? styles.enabled : styles.disabled,
                            defaultStyles.pillButton
                        ]}
                        onPress={() => login(SignInType.Phone)}
                    >
                        <Text style={defaultStyles.buttonText}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dividerContainer}>
                    <View style={styles.divider}/>
                    <Text style={styles.dividerText}>
                        or
                    </Text>
                    <View style={styles.divider}/>
                </View>
                <TouchableOpacity
                    style={[
                        defaultStyles.pillButton,
                        styles.emailContinue
                    ]}
                    onPress={() => login(SignInType.Email)}
                >
                    <Ionicons
                        name={'mail'}
                        size={24}
                        color={'#000'}
                    />
                    <Text
                        style={[
                            defaultStyles.buttonText,
                            {color: '#000'}
                        ]}
                    >
                        Continue with email
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        defaultStyles.pillButton,
                        styles.emailContinue
                    ]}
                    onPress={() => login(SignInType.Google)}
                >
                    <Ionicons
                        name={'logo-google'}
                        size={24}
                        color={'#000'}
                    />
                    <Text
                        style={[
                            defaultStyles.buttonText,
                            {color: '#000'}
                        ]}
                    >
                        Continue with google
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        defaultStyles.pillButton,
                        styles.emailContinue
                    ]}
                    onPress={() => login(SignInType.Apple)}
                >
                    <Ionicons
                        name={'logo-apple'}
                        size={24}
                        color={'#000'}
                    />
                    <Text
                        style={[
                            defaultStyles.buttonText,
                            {color: '#000'}
                        ]}
                    >
                        Continue with apple
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    );
};

export default LoginScreen;
