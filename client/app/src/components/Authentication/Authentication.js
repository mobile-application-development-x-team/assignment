import React, {Component} from 'react';
import {View, Text} from 'react-native';

StatusBar.setHidden(true);

export default class Authentication extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'blue'}}>
                <Text>Authentication Component</Text>
            </View>
        );
    }
}