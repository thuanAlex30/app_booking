import React from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
                <TouchableOpacity>
                    <Ionicons name="settings-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.profileSection}>
                <Image source={require('../image/profile.png')} style={styles.avatar} />
                <Text style={styles.name}>Huỳnh Thuận</Text>
                <Text style={styles.membership}>Gold Member</Text>
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Account Information</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Member N°</Text>
                    <Text style={styles.infoValue}>477 833 9222 922</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Miles collected</Text>
                    <Text style={styles.infoValue}>14,934</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Member Class</Text>
                    <Text style={styles.infoValue}>Gold</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Personal Details</Text>
                {['Personal Information', 'Passport Details', 'Payment Methods', 'Flight Preferences'].map((item, index) => (
                    <TouchableOpacity key={index} style={styles.optionRow}>
                        <Text style={styles.optionText}>{item}</Text>
                        <Ionicons name="chevron-forward" size={20} color="black" />
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>General</Text>
                {['Flight Information', 'Travel Requirements', 'Baggage', 'Contact', 'Legal'].map((item, index) => (
                    <TouchableOpacity key={index} style={styles.optionRow}>
                        <Text style={styles.optionText}>{item}</Text>
                        <Ionicons name="chevron-forward" size={20} color="black" />
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    membership: {
        color: 'gold',
        fontSize: 14,
    },
    infoCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    infoLabel: {
        color: '#6c757d',
    },
    infoValue: {
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    optionText: {
        fontSize: 14,
    },
    logoutButton: {
        backgroundColor: '#dc3545',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
