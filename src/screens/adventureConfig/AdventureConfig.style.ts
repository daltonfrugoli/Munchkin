import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    fullBackground: {
        flex: 1,
        backgroundColor: '#240F03'
    },
    contentBackground: {
        backgroundColor: '#F2C181',
        width: '80%',
        height: '90%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignSelf: 'center'
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
        width: '90%',
        height: 50,
        backgroundColor: '#E79022',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 15
    },
    startButtonText: {
        fontFamily: 'Windlass'
    }
})