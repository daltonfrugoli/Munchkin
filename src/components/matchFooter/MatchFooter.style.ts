import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    footerContainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#E79022',
        alignItems: 'center',
        justifyContent: 'center'
    },
    exitButton: {
        height: 45,
        width: 45,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    exitIcon: {
        resizeMode: "contain",
        width: '75%',
        height: '75%'
    }
})