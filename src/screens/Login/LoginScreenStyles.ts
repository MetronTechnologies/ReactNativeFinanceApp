import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors.ts";

export const LoginScreenStyles = StyleSheet.create({
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
        // justifyContent: 'space-between',
        // flex: 1,
        paddingBottom: 15,
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
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    divider: {
        flex: 1,
        height: StyleSheet.hairlineWidth * 2,
        backgroundColor: Colors.gray
    },
    dividerText: {
        color: Colors.gray,
        fontSize: 20
    },
    emailContinue: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 20,
        backgroundColor: '#fff'
    }
});
