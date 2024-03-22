import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        height: 200, 
        width: '90%', 
        maxWidth: 600,
        backgroundColor: '#F2C181',
        borderRadius: 10,
        flexDirection:'row',
        alignSelf: 'center',
        marginVertical: 15
    },
    cardImage: {
        resizeMode: "contain",
        width: '100%',
        height: '100%'
    },
    leftView: {
        height: '100%',
        width: '35%'
    },
    rightView: {
        height: '100%',
        width: '65%'
    },
    playerNameContainer: {
        width: '100%', 
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    playerIconContainer: {
        width: '100%', 
        height: '80%',
        alignItems: 'center'
    },
    playerIconView: {
        width: '80%',
        height: '80%',
        backgroundColor: '#FFF1E4',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#000000',
        padding: 5
    },
    statsCounterContainer: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    rightUnderView: {
        width: '100%',
        height: '50%',
        flexDirection: 'row'
    },
    genderButtonContainer: {
        height: '100%',
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    genderButton: {
        borderWidth: 2,
        width: 50,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#268A0B'
    },
    genderIcon: {
        color: '#FFFFFF',
        fontSize: 27
    },
    totalPowerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    totalPowerTitle: {
        fontSize: 18,
        fontFamily: 'Windlass',
        marginRight: 16
    },
    totalPowerOvalView: {
        width: 65,
        height: 65,
        backgroundColor: '#FFF1E4',
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{scaleX: 1.3}]
    },
    totalPowerText: {
        fontFamily: 'Windlass',
        transform: [{scaleY: 1.3}],
        fontSize: 20
    },
    statsDisplay: {
        height: 60,
        width: 60,
        backgroundColor: '#FFF1E4',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderColor: '#000000',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pointsButtonContainer: {
        height: 25,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0
    },
    redPointButton: {
        height: '100%',
        width: '45%',
        backgroundColor: '#AB0A0A',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    greenPointButton: {
        height: '100%',
        width: '45%',
        backgroundColor: '#078614',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    statsButtonIcon: {
        color: '#FFFFFF'
    }
})