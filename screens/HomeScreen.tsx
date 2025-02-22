import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const data = ['Ưu đãi đặc biệt', 'Giảm giá 20%', 'Khuyến mãi cho bạn'];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.logo}>Booking.com</Text>
            </View>

            {/* Search Box */}
            <View style={styles.searchBox}>
                <TextInput placeholder="Nhập điểm đến" style={styles.input} />
                <TextInput placeholder="Chọn ngày" style={styles.input} />
                <TextInput placeholder="1 phòng - 2 người lớn - Không có trẻ em" style={styles.input} />
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.searchText}>Tìm</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {/* Promotions */}
                <View style={styles.promoContainer}>
                    <View style={styles.promoBoxBlue}>
                        <Text style={styles.promoTitle}>Genius</Text>
                        <Text style={styles.promoText}>Thuận ơi, bạn đang là Genius Cấp 1 trong chương trình khách hàng thân thiết của chúng tôi</Text>
                    </View>
                    <View style={styles.promoBox}>
                        <Text style={styles.promoText}>Giảm giá 10% cho chỗ nghỉ</Text>
                    </View>
                </View>

                {/* Offers */}
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.offerContainer}>
                            <Text style={styles.offerText}>{item}</Text>
                        </View>
                    )}
                />
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity><Text style={styles.navText}>Tìm kiếm</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.navText}>Đã lưu</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.navText}>Đặt chỗ</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.navText}>Tài khoản</Text></TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { backgroundColor: '#005BAC', padding: 10 },
    logo: { color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
    searchBox: { backgroundColor: '#FFD700', padding: 10, margin: 8, borderRadius: 8 },
    input: { backgroundColor: '#fff', padding: 8, marginBottom: 8, borderRadius: 4, fontSize: 12 },
    searchButton: { backgroundColor: '#007BFF', padding: 8, borderRadius: 4, alignItems: 'center' },
    searchText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
    promoContainer: { flexDirection: 'row', padding: 8 },
    promoBoxBlue: { backgroundColor: '#005BAC', padding: 10, borderRadius: 8, flex: 1, marginRight: 4 },
    promoBox: { backgroundColor: '#E0E0E0', padding: 10, borderRadius: 8, flex: 1 },
    promoTitle: { color: '#FFD700', fontWeight: 'bold', fontSize: 12 },
    promoText: { color: '#fff', fontSize: 10 },
    offerContainer: { padding: 10 },
    offerText: { fontSize: 12 },
    bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1, borderColor: '#ccc' },
    navText: { fontSize: 12, color: '#007BFF' }
});

export default HomeScreen;
