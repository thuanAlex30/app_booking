import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

// Danh sách số điện thoại đã đăng ký và OTP cố định
const registeredUsers = {
    '123456789': '111111',
    '987654321': '222222'
};

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<{ phone: string }>();

    const onSubmit = (data: { phone: string }) => {
        if (!registeredUsers[data.phone]) {
            alert('This phone number is not registered.');
            return;
        }

        // Lấy OTP cố định từ danh sách
        const otpCode = registeredUsers[data.phone];

        // Chuyển sang màn hình nhập OTP
        navigation.navigate('VerifyOTPScreen', { phone: data.phone, otp: otpCode });
    };

    return (
        <ImageBackground source={require('../image/b1.jpg')} style={styles.background}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>Forgot Password</Text>
                    <Text style={styles.subtitle}>Enter your phone number to receive an OTP code.</Text>

                    <Controller
                        control={control}
                        name="phone"
                        rules={{
                            required: 'Phone number is required',
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Invalid phone number',
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.inputContainer}>
                                <TextInput
                                    label="Phone"
                                    mode="outlined"
                                    keyboardType="phone-pad"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={!!errors.phone}
                                    style={styles.input}
                                    theme={{ roundness: 20 }}
                                />
                            </View>
                        )}
                    />
                    {errors.phone?.message && <Text style={styles.error}>{String(errors.phone.message)}</Text>}

                    <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
                        SEND OTP CODE
                    </Button>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.backToLogin}>Back to Login</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    background: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
    scrollContainer: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20 },
    title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: '#fff' },
    subtitle: { textAlign: 'center', marginBottom: 20, color: '#fff', fontSize: 16 },
    inputContainer: { backgroundColor: '#fff', borderRadius: 20, padding: 5, marginBottom: 10, borderWidth: 1, borderColor: '#ccc' },
    input: { borderWidth: 0, backgroundColor: 'transparent' },
    button: { marginTop: 10, paddingVertical: 8, backgroundColor: '#FFA500', borderRadius: 20 },
    backToLogin: { textAlign: 'center', marginTop: 10, color: '#007BFF' },
    error: { color: 'red', fontSize: 12, marginBottom: 10 },
});

export default ForgotPasswordScreen;
