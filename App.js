import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/Home';
import IssLocation from './Screens/IssLocation';
import MeteorScreen from './Screens/Meteor';

const Stack = createStackNavigator() 


function App(){
    return(
        <NavigationContainer> 
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerShown: false
            }}> 
            <Stack.Screen name = "Home" component={HomeScreen}/>
            <Stack.Screen name='IssLocation' component={IssLocation}/>
            <Stack.Screen name='MeteorScreen' component={MeteorScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
