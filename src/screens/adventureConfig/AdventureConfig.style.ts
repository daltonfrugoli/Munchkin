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
        height: '90%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    contentContainer: {
        width: '85%',
        height: '100%',
        alignSelf: 'center'
    },
    addAndRmPlayerButtons:{
        flexDirection: 'row'
    },
    addButton: {
        backgroundColor: '#E79022',
        width: 60,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        fontWeight: 'bold',
        marginTop: 15,
        marginRight: 10
    },
    addButtonsText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    startButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#E79022',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startButtonText: {
        fontFamily: 'Windlass'
    }
})