import React, {Component} from 'react';
import {View, Text} from 'react-native';

StatusBar.setHidden(true);

export default class OrderHistory extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text>OrderHistory Component</Text>
            </View>
        );
    }
}