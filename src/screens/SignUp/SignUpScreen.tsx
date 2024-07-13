import React, {useLayoutEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar} from "react-native";
import {defaultStyles} from "../../constants/Styles.ts";
import {SignUpScreenStyles} from "./SignUpScreenStyles.ts";
import Colors from "../../constants/Colors.ts";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/FontAwesome';


const SignUpScreen = () => {
    const [countryCode, setCountryCode] = useState('+49');
    const [phoneNumber, setPhoneNumber] = useState('')
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 50 : 0;

    const signUp = () => {

    }
    const styles = SignUpScreenStyles;
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
                    <Icon
                        name={'arrow-left'}
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
                <Text style={defaultStyles.header}>
                    Let's get started!
                </Text>
                <Text style={defaultStyles.descriptionText}>
                    Enter your phone number. We will send you a confirmation code there
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
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={defaultStyles.textLink}>
                            Already have an account? Log in
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.signUpButton,
                            phoneNumber !== '' ? styles.enabled : styles.disabled,
                            defaultStyles.pillButton
                        ]}
                        onPress={signUp}
                    >
                        <Text style={defaultStyles.buttonText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>

    );
};

export default SignUpScreen;
