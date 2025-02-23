import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RoomDetailScreen from '../screens/RoomDetailScreen';

type Room = {
    id: string;
    name: string;
    capacity: number;
    price: number;
};

type RootStackParamList = {
    Home: undefined;
    RoomDetail: { room: Room };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="RoomDetail" component={RoomDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
