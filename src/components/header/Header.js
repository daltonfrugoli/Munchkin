import React from "react";

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from "./Header.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, CommonActions } from "@react-navigation/native";

export const Header = (props) => {

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.iconPad}
                onPress={() => {
                    props.screen == 'match' ? 
                        navigation.navigate('Home')
                    :
                    navigation.dispatch(CommonActions.goBack()) 
                }}
            >
                <Ionicons style={styles.icon} name={props.screen == 'match' ? "exit-outline" : "arrow-back-sharp"}/>
            </TouchableOpacity>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}