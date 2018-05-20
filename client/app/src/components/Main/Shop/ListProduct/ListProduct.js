import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class ListProduct extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#dadada'}}>
                <Text>ListProduct Component</Text>
            </View>
        );
    }
}