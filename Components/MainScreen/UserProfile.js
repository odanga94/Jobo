import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Font, Constants} from 'expo';


Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

class HeaderUserProfile extends Component{
    render(){
      return(
        <View style={styles.container}>
          <Text style={{fontSize: 40}}>M</Text>
          <Text style={{fontSize: 40}}>e</Text>
        </View>
      );
    }
} 
export default class UserProfile extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <HeaderUserProfile/>
    }

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 30, fontFamily: 'Poppins'}}>User Profile goes here</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
        
    }
});