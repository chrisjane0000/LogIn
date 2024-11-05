import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigation = useNavigation();

    const handleLogin = () => {
        if (email === 'Christinejane8@gmail.com' && password === '123456789') {
            Alert.alert('Success', 'Logged in successfully!');
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.jpg')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.title}>Login</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#888"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry={!isPasswordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    style={styles.showButton}
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    <Text style={styles.showButtonText}>
                        {isPasswordVisible ? 'Hide' : 'Show'}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                    <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                        {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                </TouchableOpacity>
                <Text style={styles.checkboxText}>Remember Me</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.linkContainer}>
                <Text style={styles.linkSeparator}> Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.linkText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'lavender',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'purple',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    showButton: {
        paddingHorizontal: 10,
    },
    showButtonText: {
        color: 'purple',
        fontWeight: 'bold',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 3,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: 'purple',
    },
    checkmark: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    checkboxText: {
        fontSize: 16,
        color: '#444',
    },
    button: {
        backgroundColor: 'purple',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        width: 100,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    forgotPasswordText: {
        color: 'purple',
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 10,
    },
    linkText: {
        color: 'purple',
        fontSize: 16,
    },
    linkSeparator: {
        marginHorizontal: 5,
        color: '#666',
        fontSize: 15,
    },
});
