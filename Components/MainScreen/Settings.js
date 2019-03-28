import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Font, Constants} from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';


Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

class HeaderSettings extends Component{
    render(){
      return(
        <View style={styles.container}>
          <Text style={{fontSize: 30}}>S</Text>
          <Text style={{fontSize: 30}}>e</Text>
          <Text style={styles.green}>t</Text>
          <Text style={styles.yellow}>t</Text>
          <Text style={styles.red}>i</Text>
          <Text style={{fontSize: 30}}>n</Text>
          <Text style={{fontSize: 30}}>g</Text>
          <Text style={{fontSize: 30}}>s</Text>
        </View>
      );
    }
} 
export class Settings extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <HeaderSettings/>
    }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 30, fontFamily: 'Poppins'}}>Settings go here</Text>
        </View>
      );
    }
}

const SettingsStack = createStackNavigator(
  {
    Main: {screen: Settings}
  },
  {
    initialRouteName: 'Main', 
  }
)
const SettingsStackContainer = createAppContainer(SettingsStack);

export class SettingsScreen extends Component{ 
  render(){
    return <SettingsStackContainer/>
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