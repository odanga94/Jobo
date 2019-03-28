import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import {Font} from 'expo';
import t from 'tcomb-form-native';

Font.loadAsync({Poppins: require('../../../assets/Poppins-Regular.ttf')});

const Form = t.form.Form
const number = t.refinement(t.Number, function (n) {
  return n >= 0;
});


const cleaningDetails = t.struct({
  'Number of Rooms': number,
  'Buckets of Clothes': number,
  'Cars to be washed?': number
})

export default class CleanerScreen extends Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = () => {
    const value = this.refs.form.getValue();
    console.log('value: ', value);
    if(!value){
      Alert.alert('Please enter all required fields');
    } else{
      Alert.alert('Form has been submitted');
    }
  }
  render(){
    return(
      <View style={styles.bigContainer}>
          <Form ref="form" type={cleaningDetails} />
          <Button title='Submit Details' onPress={this.handleSubmit} />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
    bigContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
        
    },
});