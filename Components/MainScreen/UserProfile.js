import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Font, Constants} from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Header from '../Header/Header';

Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

export class UserProfile extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <Header title='My Profile'/>
    }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 30, fontFamily: 'Poppins'}}>User Profile goes here</Text>
        </View>
      );
    }
}

const UserProfileStack = createStackNavigator(
  {
    Main: {screen: UserProfile}
  },
  {
    initialRouteName: 'Main', 
  }
)
const UserProfileStackContainer = createAppContainer(UserProfileStack);

export class UserProfileScreen extends Component{ 
  render(){
    return <UserProfileStackContainer/>
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
        
    },
    green: {
      color: '#3eb308',
      fontSize: 30
    },

    red: {
      color: '#e20d0d',
      fontSize: 30
    },
  
    yellow: {
      color: '#f0d817',
      fontSize: 30
    }
});