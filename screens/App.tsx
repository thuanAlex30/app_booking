import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RoomDetailScreen from '../screens/RoomDetailScreen';


type Room = {
    id: string;
    name: string;
    capacity: number;
};

type RootStackParamList = {
    Home: undefined;
    RoomList: undefined;
    RoomDetail: { room: Room };
};

// Tạo Stack Navigator với kiểu dữ liệu
const Stack = createNativeStackNavigator<RootStackParamList>();



