import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Collection from './Collection';
import Category from './Category';

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Collection />
                <Category />
            </View>
        );
    }
}