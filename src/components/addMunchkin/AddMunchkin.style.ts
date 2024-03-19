import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        width: '100%'
    },
    input: {
        backgroundColor: '#F2C181'
    },
    genderButton: {
        borderWidth: 2,
        width: 40,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right:0
    },
    genderButtonIcon: {
        color: '#FFFFFF',
        fontSize: 27
    }
})