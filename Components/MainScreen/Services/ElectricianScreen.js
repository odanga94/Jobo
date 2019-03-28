import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Font, Constants} from 'expo';



Font.loadAsync({Poppins: require('../../../assets/Poppins-Regular.ttf')});


export default class ElectricianScreen extends Component{ 
    render(){
      return(
        <View style={styles.bigContainer}>
            <Text style={{fontSize: 30, fontFamily: 'Poppins'}}>Electricals Details go here</Text>
        </View>  
      );
    }
}

const styles = StyleSheet.create({
    bigContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
        
    },
});