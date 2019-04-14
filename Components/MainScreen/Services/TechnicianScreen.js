import t from 'tcomb-form-native';
import {formStyles} from './style';
import Template from './Template';

const SelectProblem = t.enums.of(['Installation', 'Computer Crashed', 'General Maintenance', 'Computer is slow', 'Others'], SelectProblem);

export default class TechnicianScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      value: null, 
      rates: {labour: 1000}, 
      image: null, 
      details: t.struct({
        Problem: SelectProblem,
        moreInfo: t.maybe(t.String)
      }),
      options: {
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
      },
      showImage: true,
      category: 'IT Tech',
      buysParts: true
    };
  }
}


