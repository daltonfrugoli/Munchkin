import React from "react";

import {
    TouchableOpacity,
    Text
} from 'react-native';

import { styles } from "./HomeButton.style";
import { useNavigation } from "@react-navigation/native";

export const HomeButton = (props) => {

    const navigation = useNavigation()

    return(
        <TouchableOpacity 
            style={ styles.buttonContainer }
            onPress={() => {
                navigation.navigate(props.press)
            }}
        >
            <Text style={ styles.buttonText }>{props.text}</Text>
        </TouchableOpacity>
    )
   
}