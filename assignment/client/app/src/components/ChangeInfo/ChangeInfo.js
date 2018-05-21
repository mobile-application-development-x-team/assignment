import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput, StatusBar
} from 'react-native';

import backSpecial from '../../media/appIcon/backs.png';

import URL from '../../configIP/config';

StatusBar.setHidden(true);
export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        // initial a user default to test feature
        this.user = null;
        this.state = {
            txtName: '',
            txtAddress: '',
            txtPhone: ''
        };

        // initial a user ID to test feature
        const _id = '5afafc5f02a8760b78547287';     // ID get from a user in MongoDB database

        // this.getUser(this._id);
    }

    backShop = (route) => () => {
        this.props.navigation.navigate({ routeName: route });
    }

    getUser(id) {
        return fetch(URL + '/users/' + id)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ txtName: res.name, txtAddress: res.address, txtPhone: res.phone_number });
                this.user = { name: this.txtName, address: this.txtAddress, phone_number: this.txtPhone };
            })
            .catch(e => console.error(e));
    }

    changeInfo(id, user) {
        console.log('change info');
        console.log(user);
    }

    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput
        } = styles;
        const { txtName, txtPhone, txtAddress } = this.state
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
                        value='User Name'
                        onChangeText={text => this.setState({ txtName: text })}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value="Tan Binh, Ho Chi Minh"
                        onChangeText={text => this.setState({ txtAddress: text })}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value="099999977"
                        onChangeText={text => this.setState({ txtPhone: text })}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={signInContainer} >
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