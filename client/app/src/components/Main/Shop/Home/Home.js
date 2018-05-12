import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={{flex: 1, alignItems: "center"}}>
                <Text>Home Component</Text>
            </View>
        );
    }
}