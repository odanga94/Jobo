import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Font, Constants} from 'expo';
import ProfessionalList from '../ProfessionalList/ProfessionalList';

Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

class HeaderServices extends Component{
    render(){
      return(
        <View style={styles.container}>
          <Text style={{fontSize: 30}}>S</Text>
          <Text style={{fontSize: 30}}>e</Text>
          <Text style={{fontSize: 30}}>r</Text>
          <Text style={styles.green}>v</Text>
          <Text style={styles.yellow}>i</Text>
          <Text style={styles.red}>c</Text>
          <Text style={{fontSize: 30}}>e</Text>
          <Text style={{fontSize: 30}}>s</Text>
        </View>
      );
    }
} 

export default class Services extends Component{
    static navigationOptions = {
      // headerTitle instead of title
      headerTitle: <HeaderServices/>
    }
  
    render(){
      return(
        <View style={styles.bigContainer}>
            <ProfessionalList/> 
        </View>  
      );
    }
  }

  

const styles = StyleSheet.create({
    bigContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      // marginLeft: 8,
      // marginRight: 8
    },

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