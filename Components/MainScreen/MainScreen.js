import React from 'react';
import { Text, View } from 'react-native';
import {Font, Constants} from 'expo';
import {Fontello} from '@expo/vector-icons'; // 6.2.2
import { createBottomTabNavigator, createAppContainer, createStackNavigator, NavigationActions } from 'react-navigation';
import {OrderHistory, OrderHistoryStack} from './OrderHistory';
import ServicesStack from './Services/Services';
import {Settings, SettingsScreen} from './Settings';
import {Support, SupportScreen} from './Support';
import {UserProfile, UserProfileScreen} from './UserProfile';


Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Fontello;
  let iconName;
  if (routeName === 'Home') {
    iconName = `icon-home`;
  } else if (routeName === 'Me') {
    iconName = `icon-user-circle`;
  } else if (routeName === 'Order History'){
    iconName = 'icon-history'
  } else if (routeName === 'Support'){
    iconName = 'icon-help-circled'
  } else if (routeName === 'Settings'){
    iconName = 'icon-cog-alt'
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const MainScreen = createAppContainer(
  createBottomTabNavigator(
    {
      Me: {screen: UserProfileScreen},
      'Order History': {screen: OrderHistoryStack},
      Home: { screen: ServicesStack },
      Support: {screen: SupportScreen},
      Settings: { screen: SettingsScreen},
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#3eb308',
        inactiveTintColor: 'gray',
      },
      initialRouteName: 'Home'
    }
  
  )
);

export class MainScreenContainer extends React.Component{
  render(){
    return(
      <MainScreen/>
    )
  }
}


