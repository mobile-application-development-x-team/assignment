
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet, TextInput
} from 'react-native';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignUp: false};
    }

    navigateToScreen = (route) => () => {
        this.props.navigation.navigate({ routeName: route });
    }

    onClickSignUpLink() {
        this.setState({ isSignUp: true });
    }

    onCloseSignUpForm() {
        this.setState({ isSignUp: false });
    }

    onSignUp() {
        console.log('onSignUp');
    }

    onSignIn() {
        console.log('onSignIn');
    }
    render() {
        const { row1, container, iconStyle, titleStyle,
            inputStyle, signButton, body,
            signText } = styles;
        const { isSignUp, msg } = this.state;
        const SignUpView = (
            <View style={{ marginTop: 50 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: '600',
                        color: '#fff',
                        marginTop: 10,
                        marginLeft: 10
                    }}>SIGN UP</Text>
                    <TouchableOpacity onPress={this.onCloseSignUpForm.bind(this)}>
                        <Text
                            style={{
                                marginTop: 15,
                                marginLeft: 270
                            }}
                        >Close x</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your name"
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your email"
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your phone number"
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your password"
                    secureTextEntry
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your re-password"
                    secureTextEntry
                />
                <TouchableOpacity style={signButton} onPress={() => {
                    this.onSignUp.bind(this);
                    this.navigateToScreen('Shop');
                }}>
                    <Text style={signText}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const SignUp = isSignUp ? SignUpView : <View />
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.navigateToScreen('Shop')}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>NEW FASHION SHOP</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <View style={body}>
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your email"
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                    <TouchableOpacity style={signButton} onPress={() => {
                        this.onSignIn.bind(this);
                        this.navigateToScreen('Shop');
                    }}>
                        <Text style={signText}>SIGN IN NOW</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.onClickSignUpLink.bind(this)}>
                    <Text style={{ margin: 10, color: '#fff', fontSize: 15, fontWeight: '300' }}>Sign Up Now !</Text>
                </TouchableOpacity>
                {SignUp}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4527a0',
        padding: 20,
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    body: {
        marginTop: 100
    },
    iconStyle: {
        width: 30,
        height: 30
    },
    titleStyle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '600'
    },
    inputStyle: {
        height: 40,
        backgroundColor: '#fff',
        margin: 10
    },
    signButton: {
        height: 40,
        margin: 10,
        backgroundColor: '#e0f7fa',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        alignItems: 'center',
    },
    signText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#9e9e9e',
        marginTop: 5
    }
});
