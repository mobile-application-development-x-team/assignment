import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet
} from 'react-native';
import global from '../../global';
import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: ''
        };
    }

    onSearch() {
        const { txtSearch } = this.state;
        this.setState({ txtSearch: '' });
        console.log('clicked search');
    }

    render() {
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>New Fashion Shop</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder="What do you want to buy?"
                    underlineColorAndroid="transparent"
                    value={this.state.txtSearch}
                    onChangeText={text => this.setState({ txtSearch: text })}
                    // onFocus={() => global.gotoSearch()}
                    onSubmitEditing={this.onSearch.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#03a9f4',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        height: height / 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0
    },
    titleStyle: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: '600'
    },
    iconStyle: {
        width: 30,
        height: 30
    }
});