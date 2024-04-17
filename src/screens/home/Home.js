import React, {useState, useRef} from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated
} from 'react-native';

import { styles } from './Home.style';
import { HomeButton } from '../../components/homeButton/HomeButton';
import { db } from '../../App';

export function Home({navigation, route}){

    const leftMargin = useState(new Animated.Value(0))[0]
    const [btnClicked, setBtnClicked]  = useState(false)
    const startAnimation = () => {
        setBtnClicked(!btnClicked)
        Animated.timing(leftMargin, {
            toValue: btnClicked ? 0 : 100,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    return(
        <SafeAreaView style={styles.fullScreen}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Munchkin</Text>
                    <Text style={styles.titleText}>Counter</Text>
                    <Image source={require('../../assets/images/pngegg.png')} style={styles.logo}/>
                </View>
                <View style={styles.buttonsContainer}>
                    <Animated.View
                        style={{
                            height: 50,
                            width:50,
                            backgroundColor: 'orange',
                            marginLeft: leftMargin
                        }}
                    ></Animated.View>
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
