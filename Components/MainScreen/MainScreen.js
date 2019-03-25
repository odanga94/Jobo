import React from 'react';
import { Text, View } from 'react-native';
import {Font, Constants} from 'expo';
import {Fontello} from '@expo/vector-icons'; // 6.2.2
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import OrderHistory from './OrderHistory';
import Services from './Services';
import Settings from './Settings';
import Support from './Support';
import UserProfile from './UserProfile';


Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});


class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

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

export const MainScreen = createAppContainer(
  createBottomTabNavigator(
    {
      Me: { screen: UserProfile},
      'Order History': {screen: OrderHistory},
      Home: { screen: Services },
      Support: {screen: Support},
      Settings: { screen: Settings},
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

