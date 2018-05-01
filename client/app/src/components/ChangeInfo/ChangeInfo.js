import React, {Component} from 'react';
import {View, Text} from 'react-native';

StatusBar.setHidden(true);

export default class ChangeInfo extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'yellow'}}>
                <Text>ChangeInfo Component</Text>
            </View>
        );
    }
}