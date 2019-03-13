import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {Font} from 'expo';
import Business from './Components/Business/Business'

Font.loadAsync({Poppins: require('./assets/Poppins-Regular.ttf')});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.bigContainer}>
        <View style={styles.container}>
          <Text style={{fontSize: 40}}>J</Text>
          <Text style={styles.green}>o</Text>
          <Text style={styles.yellow}>b</Text>
          <Text style={styles.red}>o</Text>
        </View>
        <Business/> 
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  bigContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20
  },

  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    
  },
  green: {
    color: '#3eb308',
    fontSize: 40
  },
  red: {
    color: '#e20d0d',
    fontSize: 40
  },
  yellow: {
    color: '#f0d817',
    fontSize: 40
  }
});

AppRegistry.registerComponent('Jobo', () => App);
