import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { useRoute, useNavigation } from '@react-navigation/native';

const VerifyOTPScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { phone, otp } = route.params; // Nhận phone & otp từ ForgotPasswordScreen

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<{ otpInput: string }>();

    const onSubmit = (data: { otpInput: string }) => {
        if (data.otpInput === otp) {
            alert('OTP verified! Redirecting to reset password...');
            navigation.navigate('ResetPasswordScreen', { phone });
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    return (
        <ImageBackground source={require('../image/b1.jpg')} style={styles.background}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>Verify OTP</Text>
                    <Text style={styles.subtitle}>Enter the OTP sent to {phone}</Text>

                    <Controller
                        control={control}
                        name="otpInput"
                        rules={{
                            required: 'OTP is required',
                            minLength: { value: 6, message: 'OTP must be 6 digits' },
                            maxLength: { value: 6, message: 'OTP must be 6 digits' },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.inputContainer}>
                                <TextInput
                                    label="OTP"
                                    mode="outlined"
                                    keyboardType="numeric"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={!!errors.otpInput}
                                    style={styles.input}
                                    theme={{ roundness: 20 }}
                                />
                            </View>
                        )}
                    />
                    {errors.otpInput?.message && <Text style={styles.error}>{String(errors.otpInput.message)}</Text>}

                    <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
                        VERIFY OTP
                    </Button>
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
    error: { color: 'red', fontSize: 12, marginBottom: 10 },
});

export default VerifyOTPScreen;
