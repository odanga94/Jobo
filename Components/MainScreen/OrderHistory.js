import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Font, Constants} from 'expo';
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';
import Header from '../Header/Header';

Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

export class OrderHistory extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <Header title='My Orders'/>,
        //header: null
    } 

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 30, fontFamily: 'Poppins'}}>My Orders go here</Text>
        </View>
      );
    }
}

const OrderStack = createStackNavigator(
  {
    Main: {screen: OrderHistory}
  },
  {
    initialRouteName: 'Main', 
  }
)
const OrderStackContainer = createAppContainer(OrderStack);

export class OrderHistoryStack extends Component{ 
  render(){
    return <OrderStackContainer/>
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

