import React, { Component } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Welcome',
      };
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Button
                    onPress={() => this.props.navigation.navigate('ListProduct')} 
                    title="LIST PRODUCT"/>
                <Collection />
                {/* <Category /> */}
                <TopProduct />
            </ScrollView>
        );
    }
}