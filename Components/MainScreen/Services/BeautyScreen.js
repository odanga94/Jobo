import t from 'tcomb-form-native';
import {formStyles} from './style';
import Template, {SelectNumber} from './Template';

const Form = t.form.Form;

const SelectService = t.enums.of(['Braids', 'Locks', 'Weave'], SelectService)

export default class BeautyScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false, 
      value: null, 
      rates: {labour: 1000},
      options: {
        fields: {
          Service: {
            label: 'I need a Stylist for: ',
            error: 'Please select the type of service you would like'
          },
          Stylists: {
            label: 'How many stylists do you need?',
            error: 'Please select a number greater than or equal to zero.'
          },
        },
        stylesheet: formStyles
      },
      details: t.struct({
        Service: SelectService,
        Stylists : SelectNumber
      }),
      category: 'Stylist'

    };
  }
}

