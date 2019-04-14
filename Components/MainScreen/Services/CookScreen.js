import React from 'react';
import { Text, View} from 'react-native';
import t from 'tcomb-form-native';
import {styles, formStyles} from './style';
import Template, {SelectNumber} from './Template';

export default class CookScreen extends Template{ 
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      value: null, 
      rates: {labour: 1000},
      details: t.struct({
        Plates : SelectNumber,
        MealType: t.String
      }),
      options: {
        fields: {
          MealType: {
            label: 'What meal should the chef cook: ',
            error: 'Please select the type of food you want'
          },
          Plates: {
            label: 'How many People?',
            error: 'Please select the number of people being cooked for'
          },
          
        },
        stylesheet: formStyles
      },
      category: 'Cook',
      buysParts: true   
    };
  }

  showCost(){
    let totalCost = parseInt(this.state.value.Plates, 10) * this.state.rates.labour;
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
}

