import React from 'react';
import { Text, View} from 'react-native';
import t from 'tcomb-form-native';
import {styles, formStyles} from './style';
import Template, {SelectNumber} from './Template';

const SelectDistance = t.enums.of(['<5km', '5km - 50km', '50km - 100km', '>100km'], SelectDistance)

export default class MovingScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      value: null, 
      rates: {labour: 1000},
      details: t.struct({
        Trucks: SelectNumber,
        Distance : SelectDistance,
      }),
      options: {
        fields: {
          Trucks: {
            label: 'How many Trucks do you need: ',
            error: 'Please select the number of trucks'
          },
          Distance: {
            label: 'Select approximate distance: ',
            error: 'Please select an option'
          }
        },
        stylesheet: formStyles
      },
      category: 'Mover'
    };
  }

  showCost(){
    let totalCost = parseInt(this.state.value.Trucks, 10) * this.state.rates.labour;
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


