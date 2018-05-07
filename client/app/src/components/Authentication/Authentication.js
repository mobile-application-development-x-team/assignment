import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default class Authentication extends Component {
    backtoMain() {
        console.log('Authentication go back to Main');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text>Authentication Component</Text>
                <TouchableOpacity onPress={this.backtoMain.bind(this)}>
                    <Text>go back to main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}