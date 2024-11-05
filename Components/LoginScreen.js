import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const navigation = useNavigation();

const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password123') {
        Alert.alert('Success', 'Logged in successfully!');
    } else {
        Alert.alert('Error', 'Invalid email or password');
    }
    };

    return (
    <View style={styles.container}>
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

    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
    </TouchableOpacity>

      {/* Link for Sign Up */}
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
    fontSize: 15
    },
});
