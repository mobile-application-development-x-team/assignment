import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

StatusBar.setHidden(true);

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text>Main Component</Text>
            </View>
        );
    }
}