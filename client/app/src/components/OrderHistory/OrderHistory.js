import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';

StatusBar.setHidden(true);

export default class OrderHistory extends Component{
    backtoMain() {
        console.log('Order History go back to Main');
    }
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text>Order History Component</Text>
                <TouchableOpacity onPress={this.backtoMain.bind(this)}>
                    <Text>go back to main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}