import React, { useState, useEffect } from "react";

import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

import { styles } from "./Match.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MunchkinStats } from "../../classes/MunchkinClass";


export function Match({navigation, route}){
      
    //armazena os dados dos munchkins vindo da tela de config
    const [munchkinsData, setMunchkinsData] = useState(route.params.data)

    //armazena os dados dos munchkins que irão para os cards
    const [munchkinsCardData, setMunchkinsCardData] = useState([])

    //cria os dados necessários para utilização dos cards, usando a classe MunchkinStats
    useEffect(() => {
        if(munchkinsCardData.length < 1){
            munchkinsData.map((item, index) => {
                munchkinsCardData.push(new MunchkinStats(item.id, item.name, item.gender))
            })
        }
    }, [])

    //subtrai 1 level
    function subLevel(index){
        const alterLevel = [...munchkinsCardData]
        alterLevel[index].level--
        setMunchkinsCardData(alterLevel)
    }

    //adiciona 1 level
    function addLevel(index){
        const alterLevel = [...munchkinsCardData]
        alterLevel[index].level++
        setMunchkinsCardData(alterLevel)
    }

    //subtrai 1 ponto de equipamentos
    function subGear(index){
        const alterGear = [...munchkinsCardData]
        alterGear[index].gear--
        setMunchkinsCardData(alterGear)
    }

    //adiciona 1 ponto de equipamento
    function addGear(index){
        const alterGear = [...munchkinsCardData]
        alterGear[index].gear++
        setMunchkinsCardData(alterGear)
    }

    //subtrai 1 ponto de modificador 
    function subMod(index){
        const alterMod = [...munchkinsCardData]
        alterMod[index].mod--
        setMunchkinsCardData(alterMod)
    }

    //adiciona 1 ponto de modificador 
    function addMod(index){
        const alterMod = [...munchkinsCardData]
        alterMod[index].mod++
        setMunchkinsCardData(alterMod)
    }

    //componente que renderiza os stats displays
    const StatsCounter = (props) => {

        return(
            <View style={{alignItems: 'center', height: '100%'}}>
                <Text>{props.title}</Text>
                <View style={styles.statsDisplay}>
                    <Text style={{fontSize: 35}}>{props.number}</Text>
                </View>
                <View style={styles.pointsButtonContainer}>
                    <TouchableOpacity 
                        style={styles.redPointButton}
                        onPress={() => {
                            switch (props.title) {
                                case 'Level':
                                    subLevel(props.index)
                                break;

                                case 'Gear':
                                    subGear(props.index)
                                break;    
                                
                                case 'Mods':
                                    subMod(props.index) 
                                break;
                            }
                        }}
                    >

                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.greenPointButton}
                        onPress={() => {
                            switch (props.title) {
                                case 'Level':
                                    addLevel(props.index)
                                break;

                                case 'Gear':
                                    addGear(props.index)
                                break;    
                                
                                case 'Mods': 
                                    addMod(props.index)
                                break;
                            }
                            
                        }}
                    >

                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //componente que renderiza os cards
    const MunchkinCard = ({item, index}) => {

        return(
            <View style={styles.cardContainer}>
                <View style={styles.leftView}>
                    <View style={styles.playerNameContainer}>
                        <Text style={{fontFamily: 'Windlass',}}>{item.name}</Text>
                    </View>
                    <View style={styles.playerIconContainer}>
                        <View style={styles.playerIconView}>
                            <Image source={require('../../assets/images/pngegg.png')} style={styles.cardImage}/>
                        </View>
                    </View>
                </View>
                <View style={styles.rightView}>
                    <View style={styles.statsCounterContainer}>
                        <View style={{height: '100%', width: '33%'}}>
                            <StatsCounter title={'Level'} number={item.level} index={index}/>
                        </View>
                        <View style={{flex: 1}}>
                            <StatsCounter title={'Gear'} number={item.gear} index={index}/>
                        </View>
                        <View style={{height: '100%', width: '33%'}}>
                            <StatsCounter title={'Mods'} number={item.mod} index={index}/>
                        </View>
                    </View>
                    <View style={styles.rightUnderView}>
                        <View style={styles.genderButtonContainer}>
                            <TouchableOpacity
                                style={styles.genderButton}
                                onPress={() => {
                                    console.log(munchkinsCardData)
                                }}
                            >
                                <Ionicons style={styles.genderIcon} name={item.gender == 'M' ? 'male-sharp' : 'female-sharp'}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.totalPowerContainer}>
                            <Text style={styles.totalPowerText}>Total{'\n'}{'\n'}Power</Text>
                            <View style={styles.totalPowerOvalView}>
                                <Text>99</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#240F03', alignItems: 'center'}}>    
            <FlatList
                contentContainerStyle = {{ paddingBottom: 100 }}
                data = {munchkinsCardData}
                keyExtractor = {item => item.id}
                renderItem = {MunchkinCard}
                numColumns = {1}
            />       
        </SafeAreaView>
    )
}