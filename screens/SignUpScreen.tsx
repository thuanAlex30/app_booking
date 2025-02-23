import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<{ name: string; phone: string; email: string; password: string }>();

    const onSubmit = (data: { name: string; phone: string; email: string; password: string }) => {
        alert('Account created successfully!');
        navigation.navigate('LoginScreen');
    };

    return (
        <ImageBackground source={require('../image/b1.jpg')} style={styles.background}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>Sign Up</Text>

                    <Controller
                        control={control}
                        name="name"
                        rules={{ required: 'Full name is required' }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.inputContainer}>
                                <TextInput
                                    label="Full Name"
                                    mode="outlined"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={!!errors.name}
                                    style={styles.input}
                                    theme={{ roundness: 20 }}
                                />
                            </View>
                        )}
                    />
                    {errors.name?.message && <Text style={styles.error}>{String(errors.name.message)}</Text>}

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

                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.inputContainer}>
                                <TextInput
                                    label="Email"
                                    mode="outlined"
                                    keyboardType="email-address"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={!!errors.email}
                                    style={styles.input}
                                    theme={{ roundness: 20 }}
                                />
                            </View>
                        )}
                    />
                    {errors.email?.message && <Text style={styles.error}>{String(errors.email.message)}</Text>}

                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters',
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={styles.inputContainer}>
                                <TextInput
                                    label="Password"
                                    mode="outlined"
                                    secureTextEntry
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={!!errors.password}
                                    style={styles.input}
                                    theme={{ roundness: 20 }}
                                />
                            </View>
                        )}
                    />
                    {errors.password?.message && <Text style={styles.error}>{String(errors.password.message)}</Text>}

                    <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
                        SIGN UP
                    </Button>

                    <Text style={styles.signupText}>
                        Already have an account? <Text style={styles.signupLink} onPress={() => navigation.navigate('LoginScreen')}>Sign In</Text>
                    </Text>
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
        marginBottom: 20,
        color: '#fff',
    },
    inputContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    input: {
        borderWidth: 0,
        backgroundColor: 'transparent',
    },
    button: {
        marginTop: 10,
        paddingVertical: 8,
        backgroundColor: '#FFA500',
        borderRadius: 20,
    },
    signupText: {
        textAlign: 'center',
        marginTop: 10,
        color: '#fff',
    },
    signupLink: {
        color: '#FFA500',
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
});

export default SignUpScreen;
