import t from 'tcomb-form-native';
import {formStyles} from './style';
import Template from './Template';

const SelectFault = t.enums.of(['N/A','glass fittings', 'broken furniture'], SelectFault)

export default class CarpenterScreen extends Template{
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
      value: null, 
      rates: {labour: 1000}, 
      image: null, 
      details: t.struct({
        Fault : SelectFault,
        moreInfo : t.maybe(t.String)
      }),
      options: {
        fields: {
          Fault: {
            label: 'Select the type of fault:',
            error: 'Please select an item from the list. If none select N/A'
          },
          moreInfo:{
            label: 'More Information:',
          }
        },
        stylesheet: formStyles
      },
      showImage: true,
      buysParts: true,
      category: 'Carpenter'
    };
  }
}

