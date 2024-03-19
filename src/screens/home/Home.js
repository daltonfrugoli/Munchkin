import React, {useState} from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';

import { styles } from './Home.style';
import { HomeButton } from '../../components/homeButton/HomeButton';

export function Home({navigation, route}){

    return(
        <SafeAreaView style={ styles.fullScreen }>
           <View style={ styles.titleContainer }>
                <Text style={ styles.titleText }>Munchkin</Text>
                <Text style={ styles.titleText }>Counter</Text>
                <Image source={ require('../../assets/images/pngegg.png') } style={ styles.logo }/>
           </View>
           <View style={ styles.buttonsContainer }>
                <HomeButton 
                    text={ 'new game' }
                    press={ 'GameMode' }
                />
                <HomeButton text={ 'continue game' }/>
           </View>
        </SafeAreaView>
    )
} 
