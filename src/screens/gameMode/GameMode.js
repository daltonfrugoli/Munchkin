import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    ScrollView
} from 'react-native';

import { styles } from './GameMode.style';
import { ModeButtons } from '../../components/modeButtons/ModeButtons'; 
import { Header } from '../../components/header/Header';

export function GameMode(){

    return(
        <SafeAreaView style={styles.fullBackground}>
            <Header title={'Game mode'}/>
            
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Select the</Text>
                    <Text style={styles.titleText}>game mode</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <ModeButtons text={'local game'} press={'AdventureConfig'}/>
                    <ModeButtons text={'online game'} disabled={true}/>
                </View>
           
        </SafeAreaView>
    )
} 