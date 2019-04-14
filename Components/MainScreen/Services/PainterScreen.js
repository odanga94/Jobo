import React from 'react';
import { Text, View,TouchableHighlight, ScrollView} from 'react-native';
import t from 'tcomb-form-native';
import Stepper from 'react-native-js-stepper';
import {styles, formStyles} from './style';
import Template, {SelectNumber} from './Template';

export default class PainterScreen extends Template{ 
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      value: null, 
      rates: {labour: 1000},
      options : {
        fields: {
          Rooms: {
            label: 'How many rooms would you like painted:',
            error: 'Please select a number greater than or equal to zero.'
          },
          Color: {
            label: 'Paint Color:',
            error: 'Please type in the paint color that you want.'
          }
        },
        stylesheet: formStyles
      },
      details: t.struct({
        Rooms : SelectNumber,
        Color : t.String,
      }),
      category: 'Painter'
    };
  }

  showCost(){
    let totalCost = (parseInt(this.state.value.Rooms, 10) * this.state.rates.labour);
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

