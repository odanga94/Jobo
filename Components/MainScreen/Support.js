import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Font, Constants} from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';


Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

class HeaderSupport extends Component{
    render(){
      return(
        <View style={styles.container}>
          <Text style={{fontSize: 30}}>S</Text>
          <Text style={{fontSize: 30}}>u</Text>
          <Text style={styles.green}>p</Text>
          <Text style={styles.yellow}>p</Text>
          <Text style={styles.red}>o</Text>
          <Text style={{fontSize: 30}}>r</Text>
          <Text style={{fontSize: 30}}>t</Text>
        </View>
      );
    }
} 

export default class Support extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <HeaderSupport/>
    }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 30, fontFamily: 'Poppins'}}>Support goes here</Text>
        </View>
      );
    }
}

const SupportStack = createStackNavigator(
  {
    Main: {screen: Support}
  },
  {
    initialRouteName: 'Main', 
  }
)
const SupportStackContainer = createAppContainer(SupportStack);

export class SupportScreen extends Component{ 
  render(){
    return <SupportStackContainer/>
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