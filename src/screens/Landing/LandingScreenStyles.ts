import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors.ts";

export const LandingScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    video: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    header: {
        fontSize: 36,
        fontWeight: '900',
        color: 'white',
        textTransform: 'uppercase'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 60,
        paddingHorizontal: 20
    },
    buttons: {
        flex: 1,
        backgroundColor: Colors.dark
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500'
    }
});
