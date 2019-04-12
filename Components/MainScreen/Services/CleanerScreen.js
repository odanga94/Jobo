import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Alert, ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import {Font} from 'expo';
import t from 'tcomb-form-native';
import Stepper from 'react-native-js-stepper';
import {styles, formStyles} from './style';
import Template from './Template';

const Form = t.form.Form;

function generateNumbers(limit){
  let i = 0
  let numbers = []
  while(i <= limit){
    numbers.push(i);
    i++;
  }
  return numbers
}
const SelectNumber = t.enums.of(generateNumbers(20).map(number => number.toString()), SelectNumber)



const cleaningDetails = t.struct({
  Rooms: SelectNumber,
  Clothes : SelectNumber,
  Cars: SelectNumber,
  moreInfo: t.maybe(t.String),
})

const options = {
  fields: {
    Rooms: {
      label: 'How many rooms would you like to be cleaned: ',
      error: 'Please select the number of rooms. Select zero if none'
    },
    Cars: {
      label: 'How many cars to be washed: ',
      error: 'Please select the number of cars. Select zero if none'
    },
    Clothes: {
      label: 'How many laundry baskets:',
      error: 'Please select the number of laundry baskets. Select zero if none'
    },
    moreInfo: {
      label: 'More Information:',
    }
  },
  stylesheet: formStyles
}


export default class CleanerScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false, 
      value: null, 
      rates: {car: 300, clothes: 400, room: 100},
      showCost: false
    };
  }

  handleSubmit = () => {
    const value = this.refs.form.getValue();
    console.log('value: ', value);
    if(!value){
      Alert.alert('Please enter all required fields');
    } else if(!this.state.value.Terms){
      Alert.alert('Please agree to Terms');
    } else if(parseInt(this.state.value.Cars, 10) === 0 && parseInt(this.state.value.Rooms, 10) === 0 && parseInt(this.state.value.Clothes, 10) === 0){
      Alert.alert('Please select at least one item to be cleaned');
    } else{
      Alert.alert('Form has been submitted');
      this.clearForm();
    }   
    
  }

  showCost(){
    let totalCost = (parseInt(this.state.value.Cars, 10) * this.state.rates.car) +
    (parseInt(this.state.value.Clothes, 10) * this.state.rates.clothes) +
    (parseInt(this.state.value.Rooms, 10) * this.state.rates.room);

    if(!isNaN(totalCost)){
      return (
        <View style={styles.costView}>
          <Text style={[styles.viewText, {marginRight: 20}]}>Total Cost:</Text>
          <Text style={[styles.viewText, {color: 'rgb(25, 31, 76)'}]}>Ksh. {totalCost}</Text>
        </View>
      )
      } else{
        return null
      }
  }

  render() {
    return (
        <Stepper
          ref={(ref) => {
            this.stepper = ref
          }}
          validation={false}
          activeDotStyle={styles.activeDot}
          inactiveDotStyle={styles.inactiveDot}
          showTopStepper={true}
          showBottomStepper={true}
          steps={['Fill Details', 'Checkout']}
          backButtonTitle="BACK"
          nextButtonTitle="NEXT"
          textButtonsStyle={styles.textButton}
          activeStepStyle={styles.activeStep}
          inactiveStepStyle={styles.inactiveStep}
          activeStepTitleStyle={styles.activeStepTitle}
          inactiveStepTitleStyle={styles.inactiveStepTitle}
          activeStepNumberStyle={styles.activeStepNumber}
          inactiveStepNumberStyle={styles.inactiveStepNumber}>
            <ScrollView style={styles.bigContainer}>
              <Form options={options} ref="form" type={cleaningDetails} onChange={this.handleChange.bind(this)} value={this.state.value} /> 
            </ScrollView>  
            <ScrollView style={styles.bigContainer}>
              <View style={{borderBottomWidth: 1, borderBottomColor: '#4bc1bc', marginBottom: 20}}>
                <Text style={[styles.viewText, {fontSize: 25}]}>Order Summary</Text>
              </View>
              {this.state.value ? this.showCost() : null}
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableHighlight style={[styles.button, {marginTop: 20, marginRight: 5, flex: 1}]} onPress={this.cancelOrder} underlayColor='white'>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, {marginTop: 20, flex: 2}]} onPress={this.handleSubmit} underlayColor='white'>
                  <Text style={styles.buttonText}>Request for a Cleaner</Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
        </Stepper>
    )
  }
}

