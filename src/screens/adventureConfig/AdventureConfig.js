import React, { useState, useEffect } from "react";

import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { styles } from "./AdventureConfig.style";
import { globalVariables } from '../../services/GlobalVariables'
import { db } from "../../App";
import { munchkin } from "../../classes/MunchkinClass";
import { AddMunchkin } from "../../components/addMunchkin/AddMunchkin";
import { Header } from '../../components/header/Header'
import { TextInput } from 'react-native-paper';
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";


export function AdventureConfig({navigation}){

    const [adventureNames, setAdventureNames] = useState([])

    useEffect(() => {
        db.transaction((qr) => {
            qr.executeSql(
                "SELECT name FROM games",
                [],
                (_, results) => {
                    setAdventureNames(results.rows.raw())
                    console.log(results.rows.raw())
                } 
            )
        })
    }, [])

    // Armazena o nome da aventura
    const [newAdventureName, setNewAdventureName] = useState('');

    const [unavaiableName, setUnavaiableName] = useState(false)

    useEffect(() => {
        setUnavaiableName(false)
        adventureNames.map((item, index) => {
            if(item.name.toLowerCase() == newAdventureName.toLowerCase()){
                setUnavaiableName(true)
            }
        })
    }, [newAdventureName])

    
    
    const [munchkins, setMunchkins] = useState([
        {
            tag: 0,
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

    //controla visibilidade do modal
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [modalText, setModalText] = useState('')

    const ModalTest = () => (
 
        <Modal 
            isVisible={modalIsVisible}
            backdropOpacity={0.5}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalTitleContainer}>
                    <Text style={styles.modalTitleText}>{modalText}</Text>
                </View>
                <View style={styles.modalButtonsContainer}>
                    <TouchableOpacity 
                        onPress={() => {
                            setModalIsVisible(false)
                        }}
                        style={styles.modalButtons}
                    >
                        <Text>Ok</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {
                            setModalIsVisible(false)
                        }}
                        style={styles.modalButtons}
                    >
                        <Text>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )

    const [adventureId, setAdventureId] = useState(0)
    

    return(
        <SafeAreaView style={ styles.fullBackground }>
            <Header title={'Adventure config.'}/>
            <View style={ styles.contentBackground }>
                <ScrollView>
                    <View style={ styles.contentContainer }>
                        <Text style={{fontFamily: 'Windlass', fontSize: 30, color: '#000000', marginTop: 20}}>Name your</Text>
                        <Text style={{fontFamily: 'Windlass', fontSize: 30, color: '#000000'}}>adventure</Text>
                        <TextInput
                            label="Adventure's name"
                            value={newAdventureName}
                            onChangeText={text => setNewAdventureName(text)}
                            style={{backgroundColor: '#F2C181'}}
                            outlineColor="#555555"
                            activeOutlineColor="#000000"
                        />
                        <View style={{flexDirection: 'row'}}>
                            <Text>{unavaiableName ? 'nome indisponível' : null}</Text>
                            <Text>{newAdventureName.length < 1 ? '*required field' : null}</Text>
                        </View>
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
                        if(newAdventureName.length < 1 || unavaiableName || munchkins.length < 3){
                            setModalIsVisible(true)
                            setModalText('Something has gone wrong. check that all the fields have been filled in correctly and try again.')
                        }else{
                            db.transaction((qr) => {
                                qr.executeSql(
                                    "INSERT INTO games (name, status, players) " + 
                                    "VALUES (?, ?, ?);",
                                    [newAdventureName, 'progress', munchkins.length],
                                    (qr2, results) => {
                                        qr2.executeSql(
                                            "SELECT id FROM games ORDER BY id DESC LIMIT 1;",
                                            [],
                                            (qr3, results) => {
                                                globalVariables.currentGameId = results.rows.raw()[0].id
                                                setAdventureId(results.rows.raw()[0].id)
                                                for(var i = 0; i < munchkins.length; i++){
                                                    qr3.executeSql(
                                                        "INSERT INTO munchkins (tag, name, level, gear, modfier, game_id) VALUES (?, ?, ?, ?, ?, ?)",
                                                        [munchkins[i].tag, munchkins[i].name, 1, 0, 0, results.rows.raw()[0].id]
                                                    )
                                                }
                                            }
                                        )
                                    }           
                                )
                            })
                            navigation.navigate('Match', { data: munchkins, title: newAdventureName })
                            console.log('start')
                        }
                    }}
                >
                    <Text style={styles.startButtonText}>START</Text>
                </TouchableOpacity>


                {/*teste database*/}

                <TouchableOpacity 
                    style={styles.startButton}
                    onPress={() => {
                        db.transaction((qr) => {
                            qr.executeSql(
                                "INSERT INTO games (name, status) " + 
                                "VALUES (?, ?);",
                                ['new game', 'progress'],
                                (qr2, results) => {
                                    qr2.executeSql(
                                        "SELECT id FROM games ORDER BY id DESC LIMIT 1;",
                                        [],
                                        (qr3, results) => {
                                            setAdventureId(results.rows.raw()[0].id)
                                            for(var i = 0; i < munchkins.length; i++){
                                                qr3.executeSql(
                                                    "INSERT INTO munchkins (tag, name, level, gear, modfier, game_id) VALUES (?, ?, ?, ?, ?, ?)",
                                                    [munchkins[i].tag, munchkins[i].name, 1, 0, 0, results.rows.raw()[0].id]
                                                )
                                            }
                                        }
                                    )
                                }           
                            )
                        })
                        
                    }}
                >
                    <Text style={styles.startButtonText}>teste insert</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.startButton}
                    onPress={() => {
                        /*db.transaction((qr) => {
                            qr.executeSql(
                                "SELECT * FROM games",
                                [],
                                (_, results) => console.log(results.rows.raw()) 
                            )
                        })*/
                        db.transaction((qr) => {
                            qr.executeSql(
                                "SELECT * FROM munchkins",
                                [],
                                (_, results) => {
                                    console.log(results.rows.raw())
                                } 
                            )
                        })
                    }}
                >
                    <Text style={styles.startButtonText}>teste log</Text>
                </TouchableOpacity>
            </View>
            {ModalTest()}
        </SafeAreaView>
    )
}