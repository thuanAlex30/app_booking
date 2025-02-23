import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RoomDetailScreen from '../screens/RoomDetailScreen';

// Định nghĩa kiểu dữ liệu cho Room
type Room = {
    id: string;
    name: string;
    capacity: number;
};

// Định nghĩa danh sách route của ứng dụng
type RootStackParamList = {
    Home: undefined;
    RoomDetail: { room: Room };
};

// Tạo Stack Navigator với kiểu dữ liệu
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} />
        <Stack.Screen name="RoomDetail" component={RoomDetailScreen} options={{ title: 'Chi tiết phòng' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
