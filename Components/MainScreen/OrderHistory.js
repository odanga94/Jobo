import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Font, Constants} from 'expo';
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation';

Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});


class HeaderHistory extends Component{
    render(){
      return(
        <View style={styles.container}>
          <Text style={{fontSize: 30}}>M</Text>
          <Text style={{fontSize: 30}}>y</Text>
          <Text style={{fontSize: 30}}> </Text>
          <Text style={styles.green}>O</Text>
          <Text style={styles.yellow}>r</Text>
          <Text style={styles.red}>d</Text>
          <Text style={{fontSize: 30}}>e</Text>
          <Text style={{fontSize: 30}}>r</Text>
          <Text style={{fontSize: 30}}>s</Text>
        </View>
      );
    }
} 
export class OrderHistory extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <HeaderHistory/>,
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

