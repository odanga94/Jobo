import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Font, Constants} from 'expo';
import ProfessionalList from '../../ProfessionalList/ProfessionalList';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import CleanerScreen from './CleanerScreen';
import PlumberScreen from './PlumberScreen';
import ElectricianScreen from './ElectricianScreen';
import GardenerScreen from './GardenerScreen';
import BeautyScreen from './BeautyScreen';
import MovingScreen from './MovingScreen';
import CookScreen from './CookScreen';
import PainterScreen from './PainterScreen';
import CarpenterScreen from './CarpenterScreen';
import TaxesScreen from './TaxesScreen';
import TechnicianScreen from './TechnicianScreen';

Font.loadAsync({Poppins: require('../../../assets/Poppins-Regular.ttf')});

class HeaderServices extends Component{
    render(){
      return(
        <View style={styles.container}>
          <Text style={{fontSize: 30}}>S</Text>
          <Text style={{fontSize: 30}}>e</Text>
          <Text style={{fontSize: 30}}>r</Text>
          <Text style={styles.green}>v</Text>
          <Text style={styles.yellow}>i</Text>
          <Text style={styles.red}>c</Text>
          <Text style={{fontSize: 30}}>e</Text>
          <Text style={{fontSize: 30}}>s</Text>
        </View>
      );
    }
} 

class Services extends Component{
    static navigationOptions = {
      // headerTitle instead of title
      headerTitle: <HeaderServices/>,
      // header: null
    }
    constructor(props){
      super(props);
      this.handlePress = this.handlePress.bind(this);
    }
    handlePress(screen){
      this.props.navigation.navigate(screen);
    }
  
    render(){
      return(
        <View style={styles.bigContainer}>
            <ProfessionalList handlePress={this.handlePress}/> 
        </View>  
      );
    }
}

const RootStack = createStackNavigator(
  {
    'All Services': {
      screen: Services
    },

    Cleaner: {
      screen: CleanerScreen,
      navigationOptions: {title: 'Cleaning Details'}
    },

    Plumber: {
      screen: PlumberScreen,
      navigationOptions: {title: 'Plumbing Details'}
    },

    Electrician: {
      screen: ElectricianScreen,
      navigationOptions: {title: 'Electricals Details'}
    },

    Gardener: {
      screen: GardenerScreen,
      navigationOptions: {title: 'Gardening Details'}
    },

    Beauty: {
      screen: BeautyScreen,
      navigationOptions: {title: 'Details'}
    },

    Moving: {
      screen: MovingScreen,
      navigationOptions: {title: 'Moving Details'}
    },

    Cook: {
      screen: CookScreen,
      navigationOptions: {title: 'Cooking Details'}
    },

    Painter: {
      screen: PainterScreen,
      navigationOptions: {title: 'Painting Details'}
    },

    Carpenter: {
      screen: CarpenterScreen,
      navigationOptions: {title: 'Details'}
    },

    Taxes: {
      screen: TaxesScreen,
      navigationOptions: {title: 'Details'}
    },

    'IT Technician' : {
      screen: TechnicianScreen,
      navigationOptions: {title: 'Details'}
    } 
  },
  {
    initialRouteName: 'All Services'
  }
);

const ServicesContainer = createAppContainer(RootStack);

export default class ServicesStack extends React.Component {
  render() {
    return (
      <ServicesContainer/>
    );
  }
}

  

const styles = StyleSheet.create({
    bigContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      //paddingTop: Constants.statusBarHeight,
      // marginLeft: 8,
      // marginRight: 8
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
        
    },

    green: {
        color: '#3eb308',
        fontSize: 30
    },
    
    red: {
        color: '#e20d0d',
        fontSize: 30
    },
    
    yellow: {
        color: '#f0d817',
        fontSize: 30
    }
});