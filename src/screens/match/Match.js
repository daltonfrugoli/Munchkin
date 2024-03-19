import React, { useState } from "react";

import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

import { styles } from "./Match.style";

export function Match({navigation, route}){

    const [munchkins, setMunchkins] = useState(route.params.data)

    const MunchkinCard = ({item, index}) => {

        return(
            <View style={styles.cardContainer}>
                <View style={styles.leftView}>
                    <Image resizeMode="contain" source={require('../../assets/images/pngegg.png')} style={styles.cardImage}/>
                </View>
                <View style={styles.rightView}>

                </View>
            </View>
        )
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#240F03', alignItems: 'center'}}>
            <MunchkinCard/>
            
        </SafeAreaView>
    )
}