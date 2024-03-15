import React from "react";

import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import { styles } from './ModeButtons.style';
import { useNavigation } from "@react-navigation/native";


export const ModeButtons = (props) => {

    const navigation = useNavigation()

    return(
        <TouchableOpacity 
            style={[ styles.buttonContainer, { opacity: props.disabled ? 0.5 : 1 }]}
            /*onPress={() => {
                navigation.navigate(props.press)
            }}*/
            disabled={props.disabled}
            onPress={() => navigation.navigate(props.press)}
        >
            <View style={{ 
                backgroundColor: 'black',
                height: 71,
                width: 71  
            }}/>
            <Text style={ styles.buttonText }>{props.text}</Text>
        </TouchableOpacity>
    )
}