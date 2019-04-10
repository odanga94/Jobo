import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Alert, ScrollView,TouchableHighlight, Image } from 'react-native';
import {Font, ImagePicker, Permissions} from 'expo';
import t from 'tcomb-form-native';
import Stepper from 'react-native-js-stepper';
import {Fontello} from '@expo/vector-icons';


Font.loadAsync({Poppins: require('../../../assets/Poppins-Regular.ttf')});


const Form = t.form.Form;

/* function generateNumbers(limit){
  let i = 0
  let numbers = []
  while(i <= limit){
    numbers.push(i);
    i++;
  }
  return numbers
}
const SelectNumber = t.enums.of(generateNumbers(20).map(number => number.toString()), SelectNumber) */
const SelectProblem = t.enums.of(['Installation', 'Pipe burst', 'Toilet/sink leak', 'Clogged pipe', 'Unpleasant odor', 'Poor pressure','Fixture not draining/flushing', 'Appliance not working', 'Others'])


const plumbingDetails = t.struct({
  Problem: SelectProblem,
  moreInfo: t.maybe(t.String)
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
  },
}

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



export default class PlumberScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {fontLoaded: false, value: null, rates: {labour: 1000}, image: null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showCost = this.showCost.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pickImage = this.pickImage.bind(this);
  }

  async componentDidMount(){
    await Font.loadAsync({
      Poppins: require('../../../assets/Poppins-Regular.ttf'),
    });
    this.setState({fontLoaded: true});
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
    let totalCost = this.state.rates.labour;
    
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

  async pickImage(){
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted'){
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });
      console.log(result);
      if(!result.cancelled){
        this.setState({image: result.uri});
      }
    } else{
      Alert.alert('Hey! You have not enabled Jobo to access your camera')
    }
  
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
              <Form options={options} ref="form" type={plumbingDetails} onChange={this.handleChange.bind(this)} value={this.state.value} />
                <Text style={styles.viewText}>If you like, tap below to add a photo to better describe your problem:</Text>
                {image ?
                  <TouchableHighlight onPress={this.pickImage}>
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                  </TouchableHighlight> :
                  <TouchableHighlight style={styles.highlight} onPress={this.pickImage}>
                      <IconComponent name='icon-camera' size={25}/>
                  </TouchableHighlight>
                }
              <Text style={[styles.viewText, {alignSelf: 'stretch', fontSize: 16, marginTop: 3}]}>*Kindly note that the cost of plumbing materials shall be covered by you, the Customer.</Text> 
            </ScrollView>  
            <ScrollView style={styles.bigContainer}>
              <View style={{borderBottomWidth: 1, borderBottomColor: '#4bc1bc', marginBottom: 20}}>
                <Text style={[styles.viewText, {fontSize: 25}]}>Order Summary</Text>
              </View>
              {this.state.value ? this.showCost() : null}
              <TouchableHighlight style={[styles.button, {marginTop: 20}]} onPress={this.handleSubmit} underlayColor='white'>
                <Text style={styles.buttonText}>Request for a Plumber</Text>
              </TouchableHighlight>
            </ScrollView>
        </Stepper>
    )
  }
}

const styles = StyleSheet.create({
  bigContainer: {
    // flex: 1,
    // alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    //backgroundColor: '#f5f5f5' 
  },
  highlight: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#4bc1bc',
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 100
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
