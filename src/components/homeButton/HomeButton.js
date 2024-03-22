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
            style={[styles.buttonContainer, {opacity: props.disabled ? 0.6 : 1}]}
            onPress={() => {
                navigation.navigate(props.press)
            }}
            disabled={props.disabled}
        >
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
   
}