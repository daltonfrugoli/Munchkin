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
import { db } from "../../App"
import { Header } from "../../components/header/Header";
import { MatchFooter } from "../../components/matchFooter/MatchFooter";
import { MunchkinStats } from "../../classes/MunchkinClass";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
import globalVariables from "../../services/GlobalVariables";


export function Match({navigation, route}){
      
    //armazena os dados dos munchkins vindo da tela de config
    const [munchkinsData, setMunchkinsData] = useState(route.params.data)

    //armazena os dados dos munchkins que irão para os cards
    const [munchkinsCardData, setMunchkinsCardData] = useState([])

    //cria os dados necessários para utilização dos cards, usando a classe MunchkinStats
    useEffect(() => {
        if(munchkinsCardData.length < 1){
            munchkinsData.map((item, index) => {
                munchkinsCardData.push(new MunchkinStats(item.tag, item.name, item.gender, item.level, item.gear, item.modfier ))
            })
        }
    }, [])

    //registra o level atualizado no DB
    function levelDBUpdate(index){
        db.transaction((qr) => {
            qr.executeSql(
                "UPDATE munchkins SET level = ? WHERE game_id = ? AND tag = ?",
                [munchkinsCardData[index].level, globalVariables.currentGameId, index],
                (qr2, results) => {
                    qr2.executeSql(
                        "SELECT * FROM munchkins WHERE game_id = ? AND tag = ?",
                        [globalVariables.currentGameId, index],
                        (_, results) => {
                            console.log(results.rows.raw())
                        }
                    )
                }
            )
        })
    }

    //subtrai 1 level
    function subLevel(index){
        if(munchkinsCardData[index].level > 1){
            const alterLevel = [...munchkinsCardData]
            alterLevel[index].level--
            setMunchkinsCardData(alterLevel)
            levelDBUpdate(index)
        }
    }

    //adiciona 1 level
    function addLevel(index){
        const alterLevel = [...munchkinsCardData]
        alterLevel[index].level++
        setMunchkinsCardData(alterLevel)
        levelDBUpdate(index)
    }

    //registra os pontos de equipamento atualizados no DB
    function gearDBUpdate(index){
        db.transaction((qr) => {
            qr.executeSql(
                "UPDATE munchkins SET gear = ? WHERE game_id = ? AND tag = ?",
                [munchkinsCardData[index].gear, globalVariables.currentGameId, index],
                (qr2, results) => {
                    qr2.executeSql(
                        "SELECT * FROM munchkins WHERE game_id = ? AND tag = ?",
                        [globalVariables.currentGameId, index],
                        (_, results) => {
                            console.log(results.rows.raw())
                        }
                    )
                }
            )
        })
    }

    //subtrai 1 ponto de equipamentos
    function subGear(index){
        const alterGear = [...munchkinsCardData]
        alterGear[index].gear--
        setMunchkinsCardData(alterGear)
        gearDBUpdate(index)
    }

    //adiciona 1 ponto de equipamento
    function addGear(index){
        const alterGear = [...munchkinsCardData]
        alterGear[index].gear++
        setMunchkinsCardData(alterGear)
        gearDBUpdate(index)
    }

    //registra os pontos de modificadores atualizados no DB
    function modDBUpdate(index){
        db.transaction((qr) => {
            qr.executeSql(
                "UPDATE munchkins SET modfier = ? WHERE game_id = ? AND tag = ?",
                [munchkinsCardData[index].mod, globalVariables.currentGameId, index],
                (qr2, results) => {
                    qr2.executeSql(
                        "SELECT * FROM munchkins WHERE game_id = ? AND tag = ?",
                        [globalVariables.currentGameId, index],
                        (_, results) => {
                            console.log(results.rows.raw())
                        }
                    )
                }
            )
        })
    }

    //subtrai 1 ponto de modificador 
    function subMod(index){
        const alterMod = [...munchkinsCardData]
        alterMod[index].mod--
        setMunchkinsCardData(alterMod)
        modDBUpdate(index)
    }

    //adiciona 1 ponto de modificador 
    function addMod(index){
        const alterMod = [...munchkinsCardData]
        alterMod[index].mod++
        setMunchkinsCardData(alterMod)
        modDBUpdate(index)
    }

    function switchGender(gender, index){  
        const alterGender = [...munchkinsCardData];      
        alterGender[index] = { ...alterGender[index], gender: gender };  
        setMunchkinsCardData(alterGender);
    };

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
                        style={[styles.redPointButton, {opacity: props.title == 'Level' && props.number <= 1 ? 0.6 : 1}]}
                        disabled={props.title == 'Level' && props.number <= 1 ? true : false}
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
                        <Ionicons style={styles.statsButtonIcon} name="caret-down-outline"/>
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
                        <Ionicons style={styles.statsButtonIcon} name="caret-up-outline"/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //componente que renderiza os cards
    const MunchkinCard = ({item, index}) => {

        return(
            <View style={[styles.cardContainer, {backgroundColor: index % 2 == 0 ? '#F2C181' : '#B88A4E'}]}>
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
                                style={[styles.genderButton, {backgroundColor: munchkinsCardData[index].gender == 'M' ? '#268A0B': '#AC0A0A'}]}
                                onPress={() => {
                                    switchGender(munchkinsCardData[index].gender == 'M' ? 'F' : 'M', index)
                                }}
                            >
                                <Ionicons style={styles.genderIcon} name={item.gender == 'M' ? 'male-sharp' : 'female-sharp'}/>
                            </TouchableOpacity>
                        </View> 
                        <View style={styles.totalPowerContainer}>
                            <Text style={styles.totalPowerTitle}>Total{'\n'}{'\n'}Power</Text>
                            <View style={styles.totalPowerOvalView}>
                                <Text style={styles.totalPowerText}>
                                    {munchkinsCardData[index].level + munchkinsCardData[index].gear + munchkinsCardData[index].mod}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    //controla visibilidade do modal
    const [modalIsVisible, setModalIsVisible] = useState(false)

    const ModalTest = () => (
 
        <Modal 
            isVisible={modalIsVisible}
            backdropOpacity={0.5}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalTitleContainer}>
                    <Text style={styles.modalTitleText}>Deseja salvar e sair?</Text>
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

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#240F03'}}>  
            <Header screen={'match'} title={route.params.title}/>
            <ModalTest/>
            <FlatList
                contentContainerStyle = {{ paddingVertical: 30 }}
                data = {munchkinsCardData}
                keyExtractor = {item => item.tag}
                renderItem = {MunchkinCard}
                numColumns = {1}
            />  
            {ModalTest()} 
            <MatchFooter modal={(visible) => setModalIsVisible(visible)}/>   
        </SafeAreaView>
    )
}