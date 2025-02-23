import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation, useRoute } from '@react-navigation/native';

const ResetPasswordScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { phone } = route.params || {}; // Nhận số điện thoại từ VerifyOTPScreen

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<{ password: string; confirmPassword: string }>();

    const password = watch('password');

    const onSubmit = (data: { password: string; confirmPassword: string }) => {
        alert('Password has been reset successfully!');
        navigation.navigate('LoginScreen'); // Quay lại màn hình đăng nhập
    };

    return (
        <ImageBackground source={require('../image/b1.jpg')} style={styles.background}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>Reset Password</Text>
                    <Text style={styles.subtitle}>Enter a new password for your account ({phone})</Text>

                    <Controller
                        control={control}
                        name="password"
                        rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                label="New Password"
                                mode="outlined"
                                secureTextEntry
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={!!errors.password}
                                style={styles.input}
                            />
                        )}
                    />
                    {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

                    <Controller
                        control={control}
                        name="confirmPassword"
                        rules={{
                            required: 'Confirm Password is required',
                            validate: value => value === password || 'Passwords do not match',
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                label="Confirm Password"
                                mode="outlined"
                                secureTextEntry
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={!!errors.confirmPassword}
                                style={styles.input}
                            />
                        )}
                    />
                    {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

                    <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
                        RESET PASSWORD
                    </Button>

                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.backToLogin}>Back to Login</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#fff',
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',
        fontSize: 16,
    },
    input: {
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    button: {
        marginTop: 10,
        paddingVertical: 8,
        backgroundColor: '#FFA500',
        borderRadius: 20,
    },
    backToLogin: {
        textAlign: 'center',
        marginTop: 10,
        color: '#007BFF',
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
});

export default ResetPasswordScreen;
