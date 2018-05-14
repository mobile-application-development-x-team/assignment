import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                { text: 'OK', onPress: this.props.gotoSignIn() }
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: () => this.removeEmail.bind(this) }
            ],
            { cancelable: false }
        );
    }

    removeEmail() {
        this.setState({ email: '' });
    }


    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your name"
                    value=""
                // onChangeText={text => this.setState({ name: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your email"
                    value=""
                // onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your password"
                    value=""
                    secureTextEntry
                // onChangeText={text => this.setState({ password: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Re-enter your password"
                    value=""
                    secureTextEntry
                // onChangeText={text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity style={bigButton} >
                    <Text style={buttonText}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#03a9f4',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#01579b',
        fontWeight: '600'
    }
});
