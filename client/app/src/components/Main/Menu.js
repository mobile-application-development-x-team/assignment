import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
    View, Text,
    TouchableOpacity, StyleSheet, Image
} from 'react-native';
import global from '../global';
import profileIcon from '../../media/temp/profile.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { user : {
            name: 'Thach'
        } };
        global.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(user) {
        this.setState({ user });
    }

    navigateToScreen = (route) => () => {
        this.props.navigation.navigate({ routeName: route });
    }

    onSignOut() {
        this.setState({ user: null })
        console.log('signed out');
    }
    render() {
        const {
            container, profile, btnStyle, btnText,
            btnSignInStyle, btnTextSignIn, loginContainer,
            username
        } = styles;

        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnStyle} onPress={this.navigateToScreen('Authentication')}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );

        const loginJSX = (
            <View style={loginContainer}>
                <Text style={username}>Thach Chau Ngoc</Text>
                <View>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.navigateToScreen('OrderHistory')}>
                        <Text style={btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.navigateToScreen('ChangeInfo')}>
                        <Text style={btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.onSignOut.bind(this)}>
                        <Text style={btnTextSignIn}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );

        const mainJSX = this.state.user ? loginJSX : logoutJSX;
        return (
            <View style={container}>
                <Image source={profileIcon} style={profile} />
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03a9f4',
        borderRightWidth: 2,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20
    },
    btnText: {
        color: '#01579b',
        fontSize: 25,
        fontWeight: '600'
    },
    btnSignInStyle: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#01579b',
        fontSize: 20,
        fontWeight: '400'
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    username: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '900'
    }
});
