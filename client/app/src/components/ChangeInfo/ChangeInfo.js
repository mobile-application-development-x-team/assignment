import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput, StatusBar
} from 'react-native';

import backSpecial from '../../media/appIcon/backs.png';

StatusBar.setHidden(true);
export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
    }

    backShop = (route) => () => {
        this.props.navigation.navigate({ routeName: route });
    }
    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View />
                    <Text style={headerTitle}>User Infomation</Text>
                    <TouchableOpacity onPress={this.backShop('Shop')}>
                        <Image source={backSpecial} style={backIconStyle} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value="Thach Chau Ngoc"
                        // onChangeText={text => this.setState({ ...this.state, txtName: text })}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value="Truong Chinh, Tan Binh, HCM"
                        // onChangeText={text => this.setState({ ...this.state, txtAddress: text })}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value="01644431222"
                        // onChangeText={text => this.setState({ ...this.state, txtPhone: text })}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={signInContainer}>
                        <Text style={signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: {
        flex: 1,
        backgroundColor: '#03a9f4',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    },
    backIconStyle: {
        width: 30,
        height: 30,
    },
    body: {
        flex: 10,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center'
    },
    textInput: {
        height: 50,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: '#03a9f4',
        borderWidth: 1.5,
        fontWeight: '300'
    },
    signInTextStyle: {
        color: '#FFF',
        paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#03a9f4',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});