import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<{ phone: string; password: string }>();

    const onSubmit = (data: { phone: string; password: string }) => {
        if (data.phone === '123456789' && data.password === 'password123') {
            navigation.navigate('ProFileScreen');
        } else {
            alert('Invalid phone number or password');
        }
    };

    return (
        <ImageBackground source={require('../image/b1.jpg')} style={styles.background}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>Sign In</Text>

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

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot password</Text>
                    </TouchableOpacity>

                    <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
                        SIGN IN
                    </Button>

                    <Text style={styles.signupText}>
                        Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
                    </Text>

                    <Text style={styles.orText}>Or sign in with:</Text>

                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require('../image/Facebook_Logo_2023.png')} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require('../image/google.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
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
    forgotPassword: {
        textAlign: 'right',
        color: '#007BFF',
        marginBottom: 10,
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
    orText: {
        textAlign: 'center',
        marginVertical: 10,
        color: '#fff',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialButton: {
        marginHorizontal: 10,
    },
    icon: {
        width: 40,
        height: 40,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
});

export default LoginScreen;