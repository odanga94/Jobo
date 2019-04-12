import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Alert, ScrollView,TouchableHighlight, Image, ActionSheetIOS} from 'react-native';
import {Font, ImagePicker, Permissions, Camera} from 'expo';
import t from 'tcomb-form-native';
import Stepper from 'react-native-js-stepper';
import {Fontello} from '@expo/vector-icons';
import CameraScreen from '../../Camera/CameraScreen';
import {styles, formStyles} from './style';

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
  }