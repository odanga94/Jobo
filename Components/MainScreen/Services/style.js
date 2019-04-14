import {StyleSheet} from 'react-native';
import t from 'tcomb-form-native';
import {Font} from 'expo';

Font.loadAsync({Poppins: require('../../../assets/Poppins-Regular.ttf')});

const Form = t.form.Form;
t.form.Form.stylesheet.pickerContainer.normal.borderColor = '#4bc1bc';
t.form.Form.stylesheet.pickerValue.normal.color = 'rgb(25, 31, 76)';
t.form.Form.stylesheet.pickerValue.normal.fontFamily = 'Poppins';
t.form.Form.stylesheet.textbox.normal.borderColor = '#4bc1bc';
t.form.Form.stylesheet.textbox.normal.color = 'rgb(25, 31, 76)';


export const styles = StyleSheet.create({
    bigContainer: {
      // flex: 1,
      // alignItems: 'center',
      padding: 20,
      justifyContent: 'center',
      //backgroundColor: '#f5f5f5' 
    },
    highlight: {
      backgroundColor: '#f5f5f5',
      borderWidth: 1,
      borderColor: '#4bc1bc',
      borderRadius: 5, 
      alignItems: 'center', 
      justifyContent: 'center',
      alignSelf: 'stretch',
      height: 100
    },
  
    buttonText: {
      fontSize: 18,
      color: 'rgb(25, 31, 76)',
      fontFamily: 'Poppins',
      alignSelf: 'center',
      fontWeight: '600'
    },
    
    button: {
      height: 36,
      borderColor: '#4bc1bc',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center',
      padding: 3
    },
    scrollview: {
      height: 70,
      backgroundColor: 'white',
      borderWidth: 1,
      marginBottom: 10,
      alignSelf: 'stretch'
    },
    viewText: {
      fontSize: 20,
      fontFamily: 'Poppins',
      alignSelf: 'center',
      marginRight: 10,
      color: 'rgb(25, 31, 76)'
    },
    costView: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      marginBottom: 10,
    },
    viewStyle: {
      height: 100,
      marginLeft: 10,
      marginRight: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f5f5f5',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    activeDot: {
      backgroundColor: '#4bc1bc'
    },
    inactiveDot: {
      backgroundColor: '#ededed'
    },
    activeStep: {
      backgroundColor: '#4bc1bc',
      marginRight: 30,
      marginLeft: 30
    },
    inactiveStep: {
      backgroundColor: '#ededed',
      marginRight: 30,
      marginLeft: 30
    },
    activeStepTitle: {
      fontWeight: 'bold',
      fontFamily: 'Poppins',
      color: 'rgb(25, 31, 76)'
    },
    inactiveStepTitle: {
      fontWeight: 'normal',
      fontFamily: 'Poppins',
    },
    activeStepNumber: {
      color: 'white'
    },
    inactiveStepNumber: {
      color: 'black'
    },
    textButton: {
      fontFamily: 'Poppins',
      color: 'rgb(25, 31, 76)'
    }
  })

export const formStyles = {
    ...Form.stylesheet,
    formGroup: {
      normal: {
        marginBottom: 10
      },
    },
    controlLabel: {
      normal: {
        fontFamily: 'Poppins',
        color: 'rgb(25, 31, 76)',
        fontSize: 20,
        marginBottom: 3,
        fontWeight: '600',
      },
      // the style applied when a validation error occours
      error: {
        fontFamily: 'Poppins',
        color: '#e20d0d',
        fontSize: 20,
        marginBottom: 3,
        fontWeight: '600'
      }
    },
  }


  