import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class Home extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <Collection />
                {/* <Category /> */}
                <TopProduct />
            </ScrollView>
        );
    }
}