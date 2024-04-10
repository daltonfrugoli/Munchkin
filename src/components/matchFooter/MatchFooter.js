import React from "react";

import {
    View,
    TouchableOpacity,
    Image 
} from 'react-native';

import { styles } from "./MatchFooter.style";

export const MatchFooter = (props) => {

    const exitIcon = require('../../assets/images/exit.png')

    return(
        <View style={styles.footerContainer}>
            <TouchableOpacity 
                style={styles.exitButton}
                onPress={() => {
                    props.modal(true)
                }}
            >
                <Image style={styles.exitIcon} source={exitIcon}/>
            </TouchableOpacity>
        </View>
    )
}

