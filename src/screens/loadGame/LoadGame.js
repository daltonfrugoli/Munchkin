import React, { useState, useEffect } from "react";

import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { styles } from "./LoadGame.style";
import { db } from "../../App";
import { Header } from "../../components/header/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import globalVariables from "../../services/GlobalVariables";

export function LoadGame({navigation, route}){

    //Variável que armazena os games salvos localmente
    const [saveGames, setSaveGames] = useState([])

    useEffect(() => {
        db.transaction((qr) => {
            qr.executeSql(
                "SELECT * FROM games",
                [],
                (_, results) => {
                    setSaveGames(results.rows.raw())
                }
            )
        })
    }, [])

    const GamesList = ({item, index}) => {

        return(
            <TouchableOpacity 
                style={styles.listItemContainer}
                onPress={() => {
                    db.transaction((qr) => {
                        qr.executeSql(
                            "SELECT * FROM munchkins WHERE game_id = ?",
                            [item.id],
                            (_, results) => {
                                navigation.navigate('Match', { data: results.rows.raw(), title: item.name })
                                globalVariables.currentGameId = item.id
                            }
                        )
                    })
                }}
            >
                <Text style={{alignSelf: 'center', fontFamily: 'Windlass', fontSize: 15, color: '#000000'}}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Ionicons style={{fontSize: 25, alignSelf: 'center', marginRight: 10}} name="person-circle-outline"/>
                    <Text style={{alignSelf: 'center', fontFamily: 'Windlass', fontSize: 15, color: '#000000'}}>{item.players}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={styles.fullBackground}>
            <Header title={'Load Game'}/>
            <View style={ styles.contentBackground }>
                <View style={ styles.contentContainer }>
                    <Text style={{alignSelf: 'center', fontFamily: 'Windlass', fontSize: 30, color: '#000000', marginTop: 20}}>Select Your{'\n'}{'\n'}Adventure</Text>
                    <FlatList
                        contentContainerStyle = {{ paddingVertical: 30 }}
                        data = {saveGames}
                        keyExtractor = {item => item.id}
                        renderItem = {GamesList}
                        numColumns = {1}
                    />
                </View>
            </View>
            
        </SafeAreaView>  
    )
}