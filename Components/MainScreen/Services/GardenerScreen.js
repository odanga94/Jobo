import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Alert, ScrollView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import {Font} from 'expo';
import t from 'tcomb-form-native';
import Stepper from 'react-native-js-stepper';
import {Fontello} from '@expo/vector-icons';

Font.loadAsync({Poppins: require('../../../assets/Poppins-Regular.ttf')});

/*const IconComponent = Fontello;
const plusIconName = 'icon-plus-circled';
const minusIconName = 'icon-minus-circled';
const color = 'gray'; */

const Form = t.form.Form
t.form.Form.stylesheet.pickerContainer.normal.borderColor = '#4bc1bc';
t.form.Form.stylesheet.pickerValue.normal.color = 'rgb(25, 31, 76)';
t.form.Form.stylesheet.pickerValue.normal.fontFamily = 'Poppins';

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
const SelectService = t.enums.of(['Trim my fence', 'Plant flowers', 'Remove weeds', 'Landscaping'], SelectService)


const gardeningDetails = t.struct({
  Service: SelectService,
  Gardeners : SelectNumber,
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
      color: 'rgb(25, 31, 76)',
      fontSize: 20,
      marginBottom: 3,
      fontWeight: '600',
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
    Service: {
      label: 'I need a gardener to: ',
      error: 'Please select the type of service you would like'
    },
    Gardeners: {
      label: 'How many gardeners do you need?',
      error: 'Please select a number greater than or equal to zero.'
    },
    Terms: {
      label: 'Agree to Terms:',

    }
  },
  stylesheet: formStyles
}


export default class GardenerScreen extends React.Component{
  constructor(props){
    super(props);
    /* this.state = {
      fontLoaded: false,
      data: {
        gardeners: 0
      },
      minusColor: 'gray',
      plusColor: 'gray'
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this); */
    this.state = {fontLoaded: false, value: null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showCost = this.showCost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    await Font.loadAsync({
      Poppins: require('../../../assets/Poppins-Regular.ttf'),
    });
    this.setState({fontLoaded: true});
  }

  /* handleIncrement(){
    let gardeners = this.state.data.gardeners + 1;
    this.setState({data: {gardeners: gardeners}, minusColor: 'gray', plusColor: '#3eb308'});
  }

  handleDecrement(){
    if(this.state.data.gardeners > 0){
      let gardeners = this.state.data.gardeners - 1;
      this.setState({data: {gardeners: gardeners}, minusColor: '#3eb308', plusColor: 'gray'});
    }
  } */
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
    } else if(parseInt(this.state.value.Gardeners, 10) === 0){
      Alert.alert('Please select at least one gardener');
    } 
    else{
      Alert.alert('Form has been submitted');
      this.clearForm();
    }   
  }

  showCost(){
    let totalCost = (parseInt(this.state.value.Gardeners, 10) * 1000);
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
            <View style={styles.bigContainer}>
              <Form options={options} ref="form" type={gardeningDetails} onChange={this.handleChange.bind(this)} value={this.state.value} /> 
            </View>  
            <View style={styles.bigContainer}>
              <View style={{borderBottomWidth: 1, borderBottomColor: '#4bc1bc', marginBottom: 20}}>
                <Text style={[styles.viewText, {fontSize: 25}]}>Order Summary</Text>
              </View>
              {this.state.value ? this.showCost() : null}
              <TouchableHighlight style={[styles.button, {marginTop: 20}]} onPress={this.handleSubmit} underlayColor='white'>
                <Text style={styles.buttonText}>Request for a Gardener</Text>
              </TouchableHighlight>
            </View>
        </Stepper>
    )
  }
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    // alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    //backgroundColor: '#f5f5f5' 
  },
  buttonText: {
    fontSize: 20,
    color: 'rgb(25, 31, 76)',
    fontFamily: 'Poppins',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    borderColor: '#4bc1bc',
    borderWidth: 1,
    borderRadius: 5,
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
    marginRight: 10,
    color: 'rgb(25, 31, 76)'
  },
  costView: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  viewStyle: {
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  activeDot: {
    backgroundColor: '#4bc1bc'
  },
  inactiveDot: {
    backgroundColor: '#ededed'
  },
  activeStep: {
    backgroundColor: '#4bc1bc',
    marginRight: 30,
    marginLeft: 30
  },
  inactiveStep: {
    backgroundColor: '#ededed',
    marginRight: 30,
    marginLeft: 30
  },
  activeStepTitle: {
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: 'rgb(25, 31, 76)'
  },
  inactiveStepTitle: {
    fontWeight: 'normal',
    fontFamily: 'Poppins',
  },
  activeStepNumber: {
    color: 'white'
  },
  inactiveStepNumber: {
    color: 'black'
  },
  textButton: {
    fontFamily: 'Poppins',
    color: 'rgb(25, 31, 76)'
  }
})
/* const number = t.refinement(t.Number, function (n) {
  return n >= 0;
}); */
/*
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
    let totalCost = (parseInt(this.state.value.Gardeners, 10) * 1000);
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
        <Form options={options} ref="form" type={gardeningDetails} onChange={this.handleChange.bind(this)} value={this.state.value} />
        <View style={{height: 200}}>
          <ScrollView style={styles.scrollview}>
            <Text style={[styles.buttonText, {fontSize: 18}]}>Our Terms:</Text>
            <Text style={[styles.viewText, {fontSize: 16}]}>
              1. The gardening labour rate Ksh. 1000 per gardener {'\n'}
              2. The cost of other items needed for the job will be covered by you, the customer. {'\n'}
              * Payment is to be done immediately after the job is complete.
            </Text>
          </ScrollView> 
        </View>   
        {this.state.value ? this.showCost() : null}
        <TouchableWithoutFeedback style={styles.button} onPress={this.handleSubmit} underlayColor='white'>
          <Text style={styles.buttonText}>Request for a Gardener</Text>
        </TouchableWithoutFeedback>
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
}); */