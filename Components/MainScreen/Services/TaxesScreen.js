import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Alert, ScrollView, TouchableHighlight } from 'react-native';
import {Font} from 'expo';
import t from 'tcomb-form-native';

Font.loadAsync({Poppins: require('../../../assets/Poppins-Regular.ttf')});

const Form = t.form.Form
/* const number = t.refinement(t.Number, function (n) {
  return n >= 0;
}); */
function generateNumbers(limit){
  let i = 0
  let numbers = []
  while(i <= limit){
    numbers.push(i);
    i++;
  }
  return numbers
}
const SelectTaxType = t.enums.of(['Individual Returns', 'Company Returns'], SelectTaxType);


const taxesDetails = t.struct({
  TaxType : SelectTaxType,
  Terms: t.Boolean
})

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      fontFamily: 'Poppins',
      fontSize: 20,
      marginBottom: 3,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      fontFamily: 'Poppins',
      color: '#e20d0d',
      fontSize: 20,
      marginBottom: 3,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    TaxType: {
      label: 'Select Tax Type:',
      error: 'Please select the type of tax returns'
    },
    Terms: {
      label: 'Agree to Terms',
    }
  },
  stylesheet: formStyles
}

export default class CleanerScreen extends Component{
  constructor(props){
    super(props)
    this.state = {value: null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showCost = this.showCost.bind(this);
  }

  handleChange(value){
    this.setState({value: value})
  }

  clearForm(){
    this.setState({value: null, showCost: false});
  }
  handleSubmit = () => {
    const value = this.refs.form.getValue();
    console.log('value: ', value);
    if(!value){
      Alert.alert('Please enter all required fields');
    } else if(!this.state.value.Terms){
      Alert.alert('Please agree to Terms');
    } else{
      Alert.alert('Form has been submitted');
      this.clearForm();
    }   
  }

  showCost(){
    let totalCost = this.state.value.TaxType === 'Individual Returns' ? 1000 : 5000;
    if(!isNaN(totalCost)){
      return (
        <View style={styles.costView}>
          <Text style={styles.viewText}>Total Cost:</Text>
          <Text style={[styles.viewText, {color: '#3eb308'}]}>Ksh. {totalCost}</Text>
        </View>
      )
      } else{
        return null
      }
  }

  render(){
    return(
      <View style={styles.bigContainer}>
        <Form options={options} ref="form" type={taxesDetails} onChange={this.handleChange.bind(this)} value={this.state.value} />
        <View style={{height: 200}}>
          <ScrollView style={styles.scrollview}>
            <Text style={[styles.buttonText, {fontSize: 18}]}>Our Terms:</Text>
            <Text style={[styles.viewText, {fontSize: 16}]}>
              1. The rate for Individual tax returns is Ksh. 1000{'\n'}
              2. The rate for Company tax returns is Ksh.5000 {'\n'}
              * Payment is to be done immediately after the job is complete.
            </Text>
          </ScrollView> 
        </View>   
        {this.state.value ? this.showCost() : null}
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='white'>
          <Text style={styles.buttonText}>Request for a Tax Specialist</Text>
        </TouchableHighlight>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        // alignItems: 'center',
        padding: 20,
        //justifyContent: 'center',
        backgroundColor: '#f5f5f5' 
    },
    buttonText: {
      fontSize: 20,
      color: '#3eb308',
      fontFamily: 'Poppins',
      alignSelf: 'center'
    },
    button: {
      height: 36,
      backgroundColor: 'white',
      // borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    scrollview: {
      height: 70,
      backgroundColor: 'white',
      borderWidth: 1,
      marginBottom: 10,
      alignSelf: 'stretch'
    },
    viewText: {
      fontSize: 20,
      fontFamily: 'Poppins',
      alignSelf: 'center',
      marginRight: 10
    },
    costView: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      marginBottom: 10,
    }
});