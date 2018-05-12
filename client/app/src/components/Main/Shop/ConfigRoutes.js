// import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

// import Cart from './Cart/Cart';
// import Search from './Search/Search';
// import Home from './Home/Home';
// import Contact from './Contact/Contact';

// export default Tabs = TabNavigator(
//     {
//         Home: { screen: Home },
//         Cart: { screen: Cart },
//         Search: { screen: Search },
//         Contact: { screen: Contact }
//     },
//     {
//         initialRouteName: 'Home'
//     },
//     {
//         navigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, tintColor }) => {
//                 const { routeName } = navigation.state;
//                 let iconName;
//                 if (routeName === 'Home') {
//                     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//                 } else if (routeName === 'Cart') {
//                     iconName = `ios-options${focused ? '' : '-outline'}`;
//                 } else if (routeName === 'Search') {
//                     iconName = `ios-options${focused ? '' : '-outline'}`;
//                 }
//                 else {
//                     iconName = `ios-options${focused ? '' : '-outline'}`;
//                 }

//                 // You can return any component that you like here! We usually use an
//                 // icon component from react-native-vector-icons
//                 return <Ionicons name={iconName} size={25} color={tintColor} />;
//             },
//         }),
//         tabBarComponent: TabBarBottom,
//         tabBarPosition: 'bottom',
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray',
//         },
//         animationEnabled: false,
//         swipeEnabled: false,
//     }
// );