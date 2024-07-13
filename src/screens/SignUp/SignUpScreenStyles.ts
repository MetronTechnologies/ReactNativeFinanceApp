import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors.ts";

export const SignUpScreenStyles = StyleSheet.create({
    inputContainer: {
        marginVertical: 40,
        flexDirection: 'row'
    },
    input: {
        backgroundColor: Colors.lightGray,
        padding: 20,
        borderRadius: 16,
        fontSize: 20,
        marginRight: 10
    },
    signUpContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        paddingBottom: 5
    },
    signUpButton: {
        marginTop: 20,
    },
    enabled: {
        backgroundColor: Colors.dark
    },
    disabled: {
        backgroundColor: Colors.primaryMuted
    },
});
