
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface Room {
  id: number;
  name: string;
  price: number;
  capacity: number;
}

type RootStackParamList = {
  BookingScreen: undefined;
  PaymentScreen: { selectedRoom: Room };
};

const BookingScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const rooms: Room[] = [
    { id: 1, name: 'Phòng Deluxe', price: 1000000, capacity: 2 },
    { id: 2, name: 'Phòng Suite', price: 1500000, capacity: 3 },
    { id: 3, name: 'Phòng Gia Đình', price: 2000000, capacity: 4 },
  ];

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
    navigation.navigate('PaymentScreen', { selectedRoom: room });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chọn phòng của bạn</Text>
      </View>

      {rooms.map((room) => (
        <TouchableOpacity
          key={room.id}
          style={[styles.roomCard, selectedRoom?.id === room.id && styles.selectedRoom]}
          onPress={() => handleSelectRoom(room)}
        >
          <View style={styles.roomInfo}>
            <Text style={styles.roomName}>{room.name}</Text>
            <Text style={styles.roomDetails}>Sức chứa: {room.capacity} người</Text>

            <View style={styles.priceContainer}>
              <Text style={styles.oldPrice}>{(room.price * 1.2).toLocaleString()} VND</Text>
              <Text style={styles.roomPrice}>{room.price.toLocaleString()} VND / đêm</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    backgroundColor: '#1e4c91',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  roomCard: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
  },
  selectedRoom: {
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  roomInfo: {
    flex: 1,
  },
  roomName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  roomDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  roomPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default BookingScreen;
