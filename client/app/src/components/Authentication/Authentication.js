import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet
} from 'react-native';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {
    constructor(props){
        super(props);
        this.state = { isSignIn: true };
    }

    gotoSignIn() {
        this.setState({ isSignIn: true });
    }

    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }

    backShop = (route) => () => {
        this.props.navigation.navigate({ routeName: route });
    }

    render() {
        const {
            row1, iconStyle, titleStyle,
            container, controlStyle,
            signInStyle, signUpStyle,
            activeStyle, inactiveStyle
        } = styles;

        const {isSignIn} = this.state;
        const mainJSX = isSignIn ? <SignIn gotoShop={this.backShop('Shop')} /> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)} />;
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.backShop('Shop')}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>NEW FASHION SHOP</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                {mainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03a9f4',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    titleStyle: { 
        color: '#FFF', 
        fontSize: 25,
        fontWeight: '600'
    },
    iconStyle: {
        width: 30, 
        height: 30
    },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    inactiveStyle: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '400'
    },
    activeStyle: {
        color: '#01579b',
        fontSize: 15,
        fontWeight: '600'
    },
    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1,
        marginLeft: 1,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    
});
