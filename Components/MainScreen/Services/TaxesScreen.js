import React from 'react';
import { Text, View} from 'react-native';
import t from 'tcomb-form-native';
import {styles, formStyles} from './style';
import Template from './Template';

const SelectTaxType = t.enums.of(['Individual Returns', 'Company Returns'], SelectTaxType);

export default class TaxesScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      value: null, 
      rates: {labour: 1000}, 
      image: null, 
      details: t.struct({
        TaxType : SelectTaxType,
        moreInfo: t.maybe(t.String)
      }),
      options: {
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
      },
      category: 'Tax Specialist'

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
}

