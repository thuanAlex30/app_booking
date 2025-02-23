import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  PaymentScreen: { selectedRoom: Room };
};

interface Room {
  id: number;
  name: string;
  price: number;
  capacity: number;
}

type PaymentScreenRouteProp = RouteProp<RootStackParamList, 'PaymentScreen'>;

const PaymentScreen = () => {
  const route = useRoute<PaymentScreenRouteProp>();
  const navigation = useNavigation();
  const { selectedRoom } = route.params;

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleConfirmPayment = () => {
    if (!fullName || !phoneNumber || !email) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }

    Alert.alert('Thành công', 'Đặt phòng của bạn đã được xác nhận.');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Xác nhận thanh toán</Text>
      </View>

      <View style={styles.roomInfo}>
        <Text style={styles.roomName}>{selectedRoom.name}</Text>
        <Text style={styles.roomDetails}>Sức chứa: {selectedRoom.capacity} người</Text>
        <Text style={styles.roomPrice}>{selectedRoom.price.toLocaleString()} VND / đêm</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Họ và tên</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Nhập họ và tên"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Số điện thoại</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Nhập số điện thoại"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Nhập email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Yêu cầu đặc biệt</Text>
        <TextInput
          style={styles.textArea}
          value={specialRequests}
          onChangeText={setSpecialRequests}
          placeholder="Nhập yêu cầu đặc biệt (nếu có)"
          multiline
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Phương thức thanh toán</Text>
        <View style={styles.paymentMethods}>
          <TouchableOpacity
            style={[
              styles.paymentMethod,
              paymentMethod === 'creditCard' && styles.selectedPaymentMethod,
            ]}
            onPress={() => setPaymentMethod('creditCard')}
          >
            <Text style={styles.paymentMethodText}>Thẻ tín dụng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.paymentMethod,
              paymentMethod === 'paypal' && styles.selectedPaymentMethod,
            ]}
            onPress={() => setPaymentMethod('paypal')}
          >
            <Text style={styles.paymentMethodText}>PayPal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.paymentMethod,
              paymentMethod === 'onArrival' && styles.selectedPaymentMethod,
            ]}
            onPress={() => setPaymentMethod('onArrival')}
          >
            <Text style={styles.paymentMethodText}>Thanh toán khi nhận phòng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
        <Text style={styles.confirmButtonText}>Xác nhận thanh toán</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    backgroundColor: '#1e4c91',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  roomInfo: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 30,
  },
  roomName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#000',
  },
  roomDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  roomPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    height: 80,
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentMethod: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
  },
  selectedPaymentMethod: {
    borderColor: '#1e4c91',
  },
  paymentMethodText: {
    color: '#000',
  },
  confirmButton: {
    backgroundColor: '#1e4c91',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaymentScreen;