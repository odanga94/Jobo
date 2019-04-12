import React from 'react';
import { Text, View, ScrollView,TouchableHighlight, Image } from 'react-native';
import t from 'tcomb-form-native';
import Stepper from 'react-native-js-stepper';
import {Fontello} from '@expo/vector-icons';
import {styles, formStyles} from './style';
import Template from './Template';

const Form = t.form.Form;
const SelectProblem = t.enums.of(['Installation', 'Power loss', 'Appliance not working', 'Sparks', 'Burning Smell', 'Water Heater','Others']);
const electricalDetails = t.struct({
  Problem: SelectProblem,
  moreInfo: t.maybe(t.String)
})

const options = {
  fields: {
    Problem: {
      label: 'What kind of problem are you having: ',
      error: 'Please select your problem. Choose \'Others\' if it is not on the list'
    },
    moreInfo: {
      label: 'More Information:',
    },
  },
  stylesheet: formStyles
}

let IconComponent = Fontello;

export default class ElectricianScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      value: null, 
      rates: {labour: 1000}, 
      image: null
    };
  }

  
  render() {
    let {image} = this.state;
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
              <Form options={options} ref="form" type={electricalDetails} onChange={this.handleChange.bind(this)} value={this.state.value} />
                <Text style={styles.viewText}>If you like, tap below to add a photo to better describe your problem:</Text>
                {image ?
                  <TouchableHighlight onPress={this.pickImage}>
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                  </TouchableHighlight> :
                  <TouchableHighlight style={styles.highlight} onPress={this.pickImage}>
                      <IconComponent name='icon-camera' size={25}/>
                  </TouchableHighlight>
                }
              <Text style={[styles.viewText, {alignSelf: 'stretch', fontSize: 16, marginTop: 3}]}>*Kindly note that the cost of necessary materials and parts shall be covered by you, the Customer.</Text> 
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
                  <Text style={styles.buttonText}>Request for an Electrician</Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
        </Stepper>
    )
  }
}


