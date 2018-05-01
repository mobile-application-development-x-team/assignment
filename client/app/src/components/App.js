import React, { Component } from 'react';
import { View, Text, StatusBar, NavigatorIOS } from 'react-native';

import Authentication from './Authentication/Authentication';
import Main from './Main/Main';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <View>
                <NavigatorIOS
                    initialRoute={{ name: "MAIN" }}
                    renderScene={(route, navigator) => {
                        switch (route.name) {
                            case "MAIN": return <Main />;
                            case "CHANGE_INFO": return <ChangeInfo />;
                            case "ORDER_HISTORY": return <OrderHistory />;
                            case "AUTHENTICATION": return <Authentication />;
                        }
                    }}
                />
            </View>
        );
    }
}
