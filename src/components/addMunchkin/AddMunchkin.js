import React, { useState } from "react";

import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import { styles } from "./AddMunchkin.style";
import { TextInput } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

export const AddMunchkin = (props) => {

    const [text, setText] = useState(props.name)
    const [gender, setGender] = useState(props.gender)

    function switchGender(){
        if(gender == 'M'){
            setGender('F')
            props.changeGender('F')
        }else if(gender == 'F'){
            setGender('NB')
            props.changeGender('NB')
        }else{
            setGender('M')
            props.changeGender('M')
        }
    }
    
    const genderIconColor = {
        M: '#268A0B',
        F: '#AC0A0A',
        NB: 'grey', 
    }

    const genderIcon = {
        M: 'male-sharp',
        F: 'female-sharp',
        NB: 'male-female-sharp', 
    }

    return(
        <View style={styles.container}>
            <View style={{width:'100%'}}>
                <TextInput
                    placeholder="Ex.: Player 1"
                    value={text}
                    onChangeText={(text) => {
                        setText(text)
                        props.changeName(text)
                    }}
                    style={styles.input}
                    outlineColor="#555555"
                    activeOutlineColor="#000000" 
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    switchGender()
                }}
                style={[styles.genderButton, {backgroundColor: genderIconColor[gender]}]}
            >
                <Ionicons style={styles.genderButtonIcon} name={genderIcon[gender]}/>
            </TouchableOpacity>
        </View>     
    )
}