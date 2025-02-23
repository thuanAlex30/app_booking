import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreens';
import HomeScreen from './screens/HomeScreen';
import ProFileScreen from './screens/ProfileScreen';
import ListBK from './screens/ListBK';
import SignUpScreen from './screens/SignUpScreen';
import HotelBookingScreen from "./screens/HotelBookingScreen";
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ProFileScreen" component= {ProFileScreen}/>
                <Stack.Screen name="ListBK" component={ListBK}/>
                <Stack.Screen name="SignUpScreen" component ={SignUpScreen}/>
                <Stack.Screen name="HotelBookingScreen" component={HotelBookingScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
