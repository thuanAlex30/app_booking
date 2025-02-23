import React from 'react';
import { View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HotelBookingScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <Image source={require('../image/hotek.jpg')} style={styles.hotelImage} />

            <View style={styles.infoContainer}>
                <Text style={styles.hotelName}>Le Indochina Hotel & Beach Da Nang City</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>⭐⭐⭐⭐⭐</Text>
                    <Text style={styles.score}>8.2</Text>
                </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageGallery}>
                <Image source={require('../image/pool.jpg')} style={styles.galleryImage} />
                <Image source={require('../image/spa.jpg')} style={styles.galleryImage} />
                <Image source={require('../image/res.jpg')} style={styles.galleryImage} />
            </ScrollView>

            <View style={styles.amenitiesContainer}>
                <Text style={styles.amenity}>🚗 Chỗ đỗ xe miễn phí</Text>
                <Text style={styles.amenity}>🏊 Hồ bơi ngoài trời</Text>
                <Text style={styles.amenity}>🍽️ Nhà hàng</Text>
                <Text style={styles.amenity}>💆 Trung tâm Spa & chăm sóc sức khỏe</Text>
            </View>

            <View style={styles.bookingContainer}>
                <Text style={styles.bookingText}>Nhận phòng: Th 7, 22 thg 2</Text>
                <Text style={styles.bookingText}>Trả phòng: CN, 23 thg 2</Text>
                <Text style={styles.bookingText}>1 phòng · 2 người lớn · Không có trẻ em</Text>
            </View>

            <Button mode="contained" style={styles.bookButton} onPress={() => alert('Phòng đã được chọn!')}>
                Chọn phòng
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    hotelImage: { width: '100%', height: 200 },
    infoContainer: { padding: 15 },
    hotelName: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
    ratingContainer: { flexDirection: 'row', alignItems: 'center' },
    rating: { fontSize: 18 },
    score: { fontSize: 18, marginLeft: 10, color: 'blue' },
    imageGallery: { flexDirection: 'row', marginVertical: 10 },
    galleryImage: { width: 100, height: 100, marginRight: 10, borderRadius: 10 },
    amenitiesContainer: { padding: 15 },
    amenity: { fontSize: 16, marginBottom: 5 },
    bookingContainer: { padding: 15, backgroundColor: '#f5f5f5', marginVertical: 10 },
    bookingText: { fontSize: 16, marginBottom: 5 },
    bookButton: { margin: 20, backgroundColor: '#007BFF', borderRadius: 20 },
});

export default HotelBookingScreen;
