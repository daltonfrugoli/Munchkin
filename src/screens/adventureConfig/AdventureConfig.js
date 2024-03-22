import React, { useState } from "react";

import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { styles } from "./AdventureConfig.style";
import { AddMunchkin } from "../../components/addMunchkin/AddMunchkin";
import { Header } from '../../components/header/Header'
import { TextInput } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import { munchkin } from "../../classes/MunchkinClass";


export function AdventureConfig({navigation}){

    const [text, setText] = useState();
    const [munchkins, setMunchkins] = useState([
        {
            id: 0,
            name: 'Player 1',
            gender: 'M'
        }
    ]);

    const switchGender = (gender, index) => {
        // Faz uma cópia do array de objetos
        const newMunchkins = [...munchkins];
        
        // Modifica a propriedade gender do objeto no índice especificado
        newMunchkins[index] = { ...newMunchkins[index], gender: gender };
    
        // Atualiza o estado com o novo array
        setMunchkins(newMunchkins);
    };

    const changeName = (text, index) => {
        // Faz uma cópia do array de objetos
        const newName = [...munchkins]

        // Modifica a propriedade name do objeto no índice especificado
        newName[index] = { ...newName[index], name: text };

        // Atualiza o estado com o novo array
        setMunchkins(newName)
    }

    const exPlayer = (indexToRemove) => {
        // Criar um novo array excluindo o índice especificado
        const newArray = munchkins.filter((_, index) => index !== indexToRemove);
        
        // Atualizar o estado com o novo array
        setMunchkins(newArray);
    };
    

    return(
        <SafeAreaView style={ styles.fullBackground }>
            <Header title={'Adventure config.'}/>
            <View style={ styles.contentBackground }>
                <ScrollView>
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
                        {
                            munchkins.map((item, index) => {
                                return(
                                    <AddMunchkin 
                                        name={item.name} 
                                        gender={item.gender} 
                                        changeGender={(gender) => switchGender(gender, index)}
                                        changeName={(text) => changeName(text, index)}
                                        key = {index}
                                    />
                                ) 
                            })
                        }
                        <View style={styles.addAndRmPlayerButtons}>
                            <TouchableOpacity 
                                style={ styles.addButton }
                                onPress={() => {
                                    setMunchkins([...munchkins, new munchkin(munchkins.length, `Player ${munchkins.length + 1}`, 'M')])
                                }}
                            >
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.addButtonsText}>+</Text>
                                    <Ionicons style={styles.addButtonsText} name="person-outline"/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.addButton, {opacity: munchkins.length == 1 ? 0.6 : 1}]}
                                disabled={munchkins.length == 1 ? true : false}
                                onPress={() => {
                                    exPlayer(munchkins.length - 1)
                                }}
                            >
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.addButtonsText}>-</Text>
                                    <Ionicons style={styles.addButtonsText} name="person-outline"/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity 
                    style={styles.startButton}
                    onPress={() => {
                        navigation.navigate('Match', { data: munchkins, title: text })
                    }}
                >
                    <Text style={styles.startButtonText}>START</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}