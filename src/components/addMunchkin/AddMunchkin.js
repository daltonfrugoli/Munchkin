import React, { useState } from "react";

import {
    View
} from 'react-native';

import { styles } from "./AddMunchkin.style";
import { TextInput } from 'react-native-paper';

export const AddMunchkin = () => {

    const [text, setText] = useState();

    return(
        <TextInput
            label="Adventure's name"
            value={text}
            onChangeText={text => setText(text)}
            style={{backgroundColor: '#F2C181'}}
            outlineColor="#555555"
            activeOutlineColor="#000000"
        />
    )
}