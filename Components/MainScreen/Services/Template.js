import React, {Component} from 'react';
import { Text, View, Alert, ScrollView,TouchableHighlight, Image, ActionSheetIOS} from 'react-native';
import {Font, ImagePicker, Permissions} from 'expo';
import t from 'tcomb-form-native';
import Stepper from 'react-native-js-stepper';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../../assets/fontello/config.json';
import CameraScreen from '../../Camera/CameraScreen';
import {styles} from './style';

const IconComponent = createIconSetFromFontello(fontelloConfig, 'Fontello');
function generateNumbers(limit){
  let i = 0
  let numbers = []
  while(i <= limit){
    numbers.push(i);
    i++;
  }
  return numbers
}
export const SelectNumber = t.enums.of(generateNumbers(20).map(number => number.toString()), SelectNumber)
const Form = t.form.Form;

export default class Template extends Component{
    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.showCost = this.showCost.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.clearForm = this.clearForm.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.pickImage = this.pickImage.bind(this);
      this.cancelOrder = this.cancelOrder.bind(this);
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
      this.setState({value: null, showCost: false, image: null});
    }
  
    cancelOrder(){
      this.clearForm();
      Alert.alert('You have cancelled the order');
    }
  
    handleSubmit = () => {
      const value = this.refs.form.getValue();
      console.log('value: ', value);
      if(!value){
        Alert.alert('Please enter all required fields');
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
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Take Photo', 'Choose from Library', 'Cancel'],
          cancelButtonIndex: 2
        },
        async (buttonIndex) => {
          if (buttonIndex === 0){
            return <CameraScreen/>
          } else if(buttonIndex === 1){
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
        }
      )
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
                <Form options={this.state.options} ref="form" type={this.state.details} onChange={this.handleChange.bind(this)} value={this.state.value} />
                  {this.state.showImage ? <Text style={styles.viewText}>If you like, tap below to add a photo to better describe your problem:</Text> : null }
                  {this.state.showImage ? (image ?
                    <TouchableHighlight onPress={this.pickImage}>
                      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    </TouchableHighlight> :
                    <TouchableHighlight style={styles.highlight} onPress={this.pickImage}>
                        <IconComponent name='camera' size={25}/>
                    </TouchableHighlight>) : null
                  }
               {this.state.buysParts ? <Text style={[styles.viewText, {alignSelf: 'stretch', fontSize: 16, marginTop: 3}]}>*Kindly note that the cost of necessary materials and parts shall be covered by you, the Customer.</Text> : null}
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
                    <Text style={styles.buttonText}>Request for a {this.state.category}</Text>
                  </TouchableHighlight>
                </View>
              </ScrollView>
          </Stepper>
      )
    }
  }