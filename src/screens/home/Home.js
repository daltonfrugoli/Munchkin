import React, {useState} from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import { styles } from './Home.style';
import { HomeButton } from '../../components/homeButton/HomeButton';
import { db } from '../../App';

export function Home({navigation, route}){

    return(
        <SafeAreaView style={styles.fullScreen}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Munchkin</Text>
                    <Text style={styles.titleText}>Counter</Text>
                    <Image source={require('../../assets/images/pngegg.png')} style={styles.logo}/>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity 
                        style={{width: 60, height: 60, backgroundColor: 'white'}}
                        onPress={() => {
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
                    />
                    <HomeButton text={'New Game'} press={'GameMode'}/>
                    <HomeButton text={'Load Game'} press={'LoadGame'}/>
                </View>                     
        </SafeAreaView>
    )
} 
