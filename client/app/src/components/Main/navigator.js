import { StackNavigator } from 'react-navigation';

import Main from './Main';
import Menu from './Menu';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

export default navigation = StackNavigator(
    {
        Main: {
            screen: Main
        },
        Menu: {
            screen: Menu
        },
        Authentication: {
            screen: Authentication
        },
        ChangeInfo: {
            screen: ChangeInfo
        },
        OrderHistory: {
            screen: OrderHistory
        }
    },
   
);