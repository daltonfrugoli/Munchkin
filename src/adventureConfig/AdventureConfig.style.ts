import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    fullBackground: {
        flex: 1,
        backgroundColor: '#240F03',
        alignItems: 'center'
    },
    contentBackground: {
        backgroundColor: '#F2C181',
        width: '80%',
        height: '95%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    contentContainer: {
        width: '85%',
        height: '100%',
        alignSelf: 'center'
    },
    addButton: {
        backgroundColor: '#E79022',
        width: 100,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        fontWeight: 'bold'
    }
})