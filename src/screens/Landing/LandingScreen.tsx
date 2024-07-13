import React from 'react';
import {useAssets} from "expo-asset";
import {StatusBar, Text, TouchableOpacity, View} from "react-native";
import {LandingScreenStyles} from "./LandingScreenStyles.ts";
import {ResizeMode, Video} from "expo-av";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {defaultStyles} from "../../constants/Styles.ts";

const LandingScreen = () => {
    const [assets] = useAssets([require('../../assets/videos/intro.mp4')])

    const styles = LandingScreenStyles;
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor='transparent'
                hidden={false}
                translucent={true}
                barStyle={"light-content"}
            />
            {
                // assets && (
                //     <Video
                //         isMuted
                //         isLooping
                //         shouldPlay
                //         resizeMode={ResizeMode.COVER}
                //         source={{uri: assets[0].uri}}
                //         style={styles.video}
                //     />
                // )
            }
            <View style={{marginTop: 80, padding: 20}}>
                <Text style={styles.header}>
                    Ready to change the way you money?
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}
                    style={[
                        defaultStyles.pillButton, styles.buttons
                    ]}
                >
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignUpScreen")}
                    style={[
                        defaultStyles.pillButton, styles.buttons, {backgroundColor: '#fff'}
                    ]}
                >
                    <Text style={[styles.buttonText, {color: '#000'}]}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LandingScreen;
