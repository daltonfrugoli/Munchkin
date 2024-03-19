import React from 'react';

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

const Stack = createNativeStackNavigator()

function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, headerLeft: null, animation: "slide_from_right" }}>
          <Stack.Screen name='Home' component={ Home }/>
          <Stack.Screen name='GameMode' component={ GameMode }/>
          <Stack.Screen name='AdventureConfig' component={ AdventureConfig }/>
          <Stack.Screen name='Match' component={ Match }/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App
