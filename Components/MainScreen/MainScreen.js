import React from 'react';
import {Fontello} from '@expo/vector-icons'; // 6.2.2
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {OrderHistoryStack} from './OrderHistory';
import ServicesStack from './Services/Services';
import {SettingsScreen} from './Settings';
import {SupportScreen} from './Support';
import {UserProfileScreen} from './UserProfile';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../assets/fontello/config.json';

let IconComponent = createIconSetFromFontello(fontelloConfig, 'Fontello');


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'Home') {
    iconName = `home`;
  } else if (routeName === 'Me') {
    iconName = `user-circle`;
  } else if (routeName === 'Order History'){
    iconName = 'history'
  } else if (routeName === 'Support'){
    iconName = 'help-circled'
  } else if (routeName === 'Settings'){
    iconName = 'cog-alt'
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
        activeTintColor: '#191f4c',
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


