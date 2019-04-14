import t from 'tcomb-form-native';
import {formStyles} from './style';
import Template, {SelectNumber} from './Template';

const SelectService = t.enums.of(['Trim my fence', 'Plant flowers', 'Remove weeds', 'Landscaping'], SelectService)

export default class GardenerScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      value: null, 
      rates: {labour: 1000},
      details: t.struct({
        Service: SelectService,
        Gardeners : SelectNumber,
      }),
      options: {
        fields: {
          Service: {
            label: 'I need a gardener to: ',
            error: 'Please select the type of service you would like'
          },
          Gardeners: {
            label: 'How many gardeners do you need?',
            error: 'Please select a number greater than or equal to zero.'
          }
        },
        stylesheet: formStyles
      },
      category: 'Gardener',
      buysParts: true
    };
  }
}


