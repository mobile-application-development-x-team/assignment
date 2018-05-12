import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Menu extends Component {
    render() {
        return (
            <View>
                <Text>MENU</Text>
                <Button
                    onPress={() => this.props.navigation("Authemtication")}
                    title="Authentication"
                />
            </View>
        );
    }
}