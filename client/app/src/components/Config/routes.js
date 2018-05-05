import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

import Authentication from '../Authentication/Authentication';
import Main from '../Main/Main';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

export default Tabs = TabNavigator(
    {
        Authentication: {
            screen: Authentication
        },
        Main: {
            screen: Main
        },
        ChangeInfo: {
            screen: ChangeInfo
        },
        OrderHistory: {
            screen: OrderHistory
        },
    },
    {
        initialRouteName: 'Main'
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Main') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'ChangInfo') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),

        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);