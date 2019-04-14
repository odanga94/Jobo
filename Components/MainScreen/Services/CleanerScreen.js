import React from 'react';
import { Text, View, Alert} from 'react-native';
import t from 'tcomb-form-native';
import {styles, formStyles} from './style';
import Template, {SelectNumber} from './Template';


export default class CleanerScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false, 
      value: null, 
      rates: {car: 300, clothes: 400, room: 100},
      showCost: false,
      details: t.struct({
        Rooms: SelectNumber,
        Clothes : SelectNumber,
        Cars: SelectNumber,
        moreInfo: t.maybe(t.String),
      }),
      options: {
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
      },
      category: 'Cleaner'
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
}

