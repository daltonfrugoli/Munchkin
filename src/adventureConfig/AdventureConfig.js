import React, { useState } from "react";

import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from "./AdventureConfig.style";
import { AddMunchkin } from "../components/addMunchkin/AddMunchkin";
import { TextInput } from 'react-native-paper';

export function AdventureConfig(){

    const [text, setText] = useState();
    const [munchkins, setMunchkins] = useState([0]);

    return(
        <SafeAreaView style={ styles.fullBackground }>
            <View style={ styles.contentBackground }>
                <View style={ styles.contentContainer }>
                    <Text style={{fontFamily: 'Windlass', fontSize: 30, color: '#000000', marginTop: 50}}>Name your</Text>
                    <Text style={{fontFamily: 'Windlass', fontSize: 30, color: '#000000'}}>adventure</Text>
                    <TextInput
                        label="Adventure's name"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={{backgroundColor: '#F2C181'}}
                        outlineColor="#555555"
                        activeOutlineColor="#000000"
                    />
                    <Text style={{fontFamily: 'Windlass', fontSize: 30, color: '#000000', marginTop: 50}}>Munchkins</Text>
                    <AddMunchkin/>
                    <TouchableOpacity 
                        style={ styles.addButton }
                        onPress={() => {
                            var munchkinsCounter = munchkins
                            munchkinsCounter.push(munchkins.length)
                            setMunchkins(munchkinsCounter)
                        }}
                    >
                        <Text>Add Player +</Text>
                    </TouchableOpacity>
                    




                    <TouchableOpacity 
                        style={[ styles.addButton, { backgroundColor: 'green' }]}
                        onPress={() => {
                            console.log(munchkins)
                        }}
                    >
                        <Text>teste</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}