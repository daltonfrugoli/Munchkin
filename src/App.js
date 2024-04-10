import React, { useEffect } from 'react';

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/home/Home'
import { GameMode } from './screens/gameMode/GameMode'; 
import { AdventureConfig } from './screens/adventureConfig/AdventureConfig';
import { Match } from './screens/match/Match';
import { LoadGame } from './screens/loadGame/LoadGame';
import SQLite from "react-native-sqlite-storage";


const Stack = createNativeStackNavigator()

export const db = SQLite.openDatabase( 
  {
    name: "app.db",
    createFromLocation: 2
  },
  () => { },
  error => { console.log(error) }
);


function App(){

  useEffect(() => {
    createTables()
    console.log('banco criado')
  }, [])

  const createTables = () => {
    db.transaction((qr) => {
      qr.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
        "games " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status TEXT, players INTEGER);"
      );
      qr.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
        "munchkins " + 
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, tag INTEGER, name TEXT, level INTEGER, gear INTEGER, modfier INTEGER, game_id INTEGER, FOREIGN KEY(game_id) REFERENCES games(id));"
      );
      /*qr.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
        "genders " +
        "(id INTEGER PRIMARY KEY, name TEXT);"
      );*/
    })
  }

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, headerLeft: null, animation: "slide_from_right" }}>
        <Stack.Screen name='Home' component={ Home }/>
        <Stack.Screen name='GameMode' component={ GameMode }/>
        <Stack.Screen name='AdventureConfig' component={ AdventureConfig }/>
        <Stack.Screen name='Match' component={ Match }/>
        <Stack.Screen name='LoadGame' component={ LoadGame }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
