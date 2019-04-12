import React from 'react';
import { Text, View, ScrollView,TouchableHighlight} from 'react-native';
import t from 'tcomb-form-native';
import Stepper from 'react-native-js-stepper';
import {styles, formStyles} from './style';
import Template from './Template';

const Form = t.form.Form

const SelectTaxType = t.enums.of(['Individual Returns', 'Company Returns'], SelectTaxType);


const taxesDetails = t.struct({
  TaxType : SelectTaxType,
  moreInfo: t.maybe(t.String)
})

const options = {
  fields: {
    TaxType: {
      label: 'Select Tax Type:',
      error: 'Please select the type of tax returns'
    },
    moreInfo: {
      label: 'More Information:',
    }
  },
  stylesheet: formStyles
}

export default class TaxesScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      value: null, 
      rates: {labour: 1000}, 
      image: null, 
    };
  }

  showCost(){
    let totalCost = this.state.value.TaxType === 'Individual Returns' ? 1000 : 5000;
    if(!isNaN(totalCost)){
      return (
        <View style={styles.costView}>
          <Text style={styles.viewText}>Total Cost:</Text>
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
              <Form options={options} ref="form" type={taxesDetails} onChange={this.handleChange.bind(this)} value={this.state.value} />
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
                  <Text style={styles.buttonText}>Request for Tax Expert</Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
        </Stepper>
    )
  }
}

