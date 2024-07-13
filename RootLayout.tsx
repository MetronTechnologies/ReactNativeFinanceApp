import {useFonts} from "expo-font";
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NavigationContainer, ParamListBase, useNavigation} from "@react-navigation/native";
import LoginScreen from "./src/screens/Login/LoginScreen.tsx";
import LandingScreen from "./src/screens/Landing/LandingScreen.tsx";
import SignUpScreen from "./src/screens/SignUp/SignUpScreen.tsx";
import React from "react";
import Colors from "./src/constants/Colors.ts";
import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HelpScreen from "./src/screens/Help/HelpScreen.tsx";


function RootLayout(): React.JSX.Element {
    const stack = createNativeStackNavigator();
    // const [loaded, error] = useFonts({
    //     SpaceMono: require("/src/assets/fonts/SpaceMono-Regular.ttf")
    // })
    return (
        <NavigationContainer>
            <stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'LandingScreen'}
            >
                <stack.Screen
                    name={'LandingScreen'}
                    component={LandingScreen}
                />
                <stack.Screen
                    name={'LoginScreen'}
                    component={LoginScreen}
                />
                <stack.Screen
                    name={'SignUpScreen'}
                    component={SignUpScreen}
                />
                <stack.Screen
                    name={'HelpScreen'}
                    component={HelpScreen}
                    options={{
                        headerShown: true,
                        title:'Help',
                        presentation: 'fullScreenModal'
                    }}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
}


export default RootLayout;
