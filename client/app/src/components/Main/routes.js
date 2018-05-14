import OrderHistory from '../OrderHistory/OrderHistory';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import Authentication from '../Authentication/Authentication';
import Menu from './Menu';
import Shop from './Shop/Shop';
import { DrawerNavigator } from 'react-navigation';

export default Route = DrawerNavigator(
    {
        Shop: {
            screen: Shop
        },
        OrderHistory: {
            screen: OrderHistory
        },
        ChangeInfo: {
            screen: ChangeInfo
        },
        Authentication: {
            screen: Authentication
        },
        Menu: {
            screen: Menu
        },
    },
    {
        initialRouteName: "Shop",
        contentComponent: Menu,
        drawerWidth: 300,
    }
);