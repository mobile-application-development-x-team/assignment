import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ChangeInfo extends Component {
    backtoMain() {
        console.log('Change Info go back to Main');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text>Change Info Component</Text>
                <TouchableOpacity onPress={this.backtoMain.bind(this)}>
                    <Text>go back to main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}