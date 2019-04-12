import React from 'react';
import { Text, View,TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import Stepper from 'react-native-js-stepper';
import {styles, formStyles} from './style';
import Template from './Template';

const Form = t.form.Form


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
const SelectDistance = t.enums.of(['<5km', '5km - 50km', '50km - 100km', '>100km'], SelectDistance)


const movingDetails = t.struct({
  Trucks: SelectNumber,
  Distance : SelectDistance,
})

const options = {
  fields: {
    Trucks: {
      label: 'How many Trucks do you need: ',
      error: 'Please select the number of trucks'
    },
    Distance: {
      label: 'Select approximate distance: ',
      error: 'Please select an option'
    }
  },
  stylesheet: formStyles
}


export default class MovingScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      value: null, 
      rates: {labour: 1000}
    };
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
            <View style={styles.bigContainer}>
              <Form options={options} ref="form" type={movingDetails} onChange={this.handleChange.bind(this)} value={this.state.value} /> 
              <Text style={styles.viewText}>*Implement features like that of taxis to calculate fuel price*</Text>
            </View>  
            <View style={styles.bigContainer}>
              <View style={{borderBottomWidth: 1, borderBottomColor: '#4bc1bc', marginBottom: 20}}>
                <Text style={[styles.viewText, {fontSize: 25}]}>Order Summary</Text>
              </View>
              {this.state.value ? this.showCost() : null}
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableHighlight style={[styles.button, {marginTop: 20, marginRight: 5, flex: 1}]} onPress={this.cancelOrder} underlayColor='white'>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, {marginTop: 20, flex: 2}]} onPress={this.handleSubmit} underlayColor='white'>
                  <Text style={styles.buttonText}>Request for a Mover</Text>
                </TouchableHighlight>
              </View>
            </View>
        </Stepper>
    )
  }
}


