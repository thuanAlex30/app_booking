import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

// Định nghĩa kiểu dữ liệu cho Room
interface Room {
    id: string;
    name: string;
    capacity: number;
    price: number;
}

// Định nghĩa kiểu dữ liệu cho Route
type RootStackParamList = {
    RoomDetail: { room: Room };
};
type RoomDetailScreenRouteProp = RouteProp<RootStackParamList, 'RoomDetail'>;

const RoomDetailScreen = ({ route }: { route: RoomDetailScreenRouteProp }) => {
    const { room } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{room.name}</Text>
            <Text>Sức chứa: {room.capacity} người</Text>
            <Text style={styles.price}>{room.price.toLocaleString()} VND / đêm</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    price: { color: 'red', fontWeight: 'bold', fontSize: 18, marginTop: 10 },
});

export default RoomDetailScreen;
