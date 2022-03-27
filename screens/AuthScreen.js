import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '../assets/Constants/Colors';
import { useDispatch } from 'react-redux';
import { signUp, signIn } from '../store/actions/auth.action';

const AuthScreen = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = () => {
        dispatch(signIn(email, password))
    }

    const handleSignUp = () => {
        dispatch(signUp(email, password))
    }

    return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{ marginLeft: 16, marginBottom: 16 }}>
                <View>
                    <Text style={styles.dataLabel}>Email</Text>
                    <TextInput style={styles.dataForm} keyboardType='email-address' onChangeText={(text) => setEmail(text)} />
                </View>
                <View>
                    <Text style={styles.dataLabel}>Password</Text>
                    <TextInput style={styles.dataForm} onChangeText={(text) => setPassword(text)} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity style={styles.button} onPress={handleLogIn}>
                    <Text style={styles.textButton}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.textButton}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    button: {
        width: '45%',
        height: 48,
        backgroundColor: Colors.SemiLightViolet,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18
    },
    dataForm: {
        borderBottomColor: Colors.SemiLightViolet,
        borderBottomWidth: 2,
        width: '75%',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: Colors.Black
    },
    dataLabel: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: Colors.Black
    }
})