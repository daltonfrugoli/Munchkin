import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fullBackground: {
        backgroundColor: '#4B2409',
        flex: 1
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
    listItemContainer: {
        backgroundColor: '#E79022',
        alignSelf: 'center',
        height: 50,
        width: '95%',
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        marginBottom: 15
    }
})