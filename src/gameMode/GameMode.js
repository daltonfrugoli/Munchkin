import React from 'react';

import {
    SafeAreaView,
    View,
    Text
} from 'react-native';

import { styles } from './GameMode.style';
import { ModeButtons } from '../components/modeButtons/ModeButtons'; 

export function GameMode(){

    return(
        <SafeAreaView style={ styles.fullBackground }>
            <View style={ styles.titleContainer }>
                <Text style={ styles.titleText }>Select the</Text>
                <Text style={ styles.titleText }>game mode</Text>
            </View>
            <View style={ styles.buttonsContainer }>
                <ModeButtons text={'local game'} press={'AdventureConfig'}/>
                <ModeButtons text={'online game'} disabled={true}/>
            </View>
        </SafeAreaView>
    )
} 