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
import Header from '../../Header/Header'

Font.loadAsync({Poppins: require('../../../assets/Poppins-Regular.ttf')});

class Services extends Component{
    static navigationOptions = {
      // headerTitle instead of title
      headerTitle: <Header title='Home'/>,
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
      navigationOptions: {headerTitle: <Header title='Cleaning'/>}
    },

    Plumber: {
      screen: PlumberScreen,
      navigationOptions: {headerTitle: <Header title='Plumbing'/>}
    },

    Electrician: {
      screen: ElectricianScreen,
      navigationOptions: {headerTitle: <Header title='Electricals'/>}
    },

    Gardener: {
      screen: GardenerScreen,
      navigationOptions: {headerTitle: <Header title='Gardening'/>}
    },

    Beauty: {
      screen: BeautyScreen,
      navigationOptions: {headerTitle: <Header title='Beauty'/>}
    },

    Moving: {
      screen: MovingScreen,
      navigationOptions: {headerTitle: <Header title='Moving'/>}
    },

    Cook: {
      screen: CookScreen,
      navigationOptions: {headerTitle: <Header title='Cooking'/>}
    },

    Painter: {
      screen: PainterScreen,
      navigationOptions: {headerTitle: <Header title='Painting'/>}
    },

    Carpenter: {
      screen: CarpenterScreen,
      navigationOptions: {headerTitle: <Header title='Carpenting'/>}
    },

    Taxes: {
      screen: TaxesScreen,
      navigationOptions: {headerTitle: <Header title='Taxes'/>}
    },

    'IT Technician' : {
      screen: TechnicianScreen,
      navigationOptions: {headerTitle: <Header title='IT'/>}
    } 
  },
  {
    initialRouteName: 'All Services',
    defaultNavigationOptions: {
      headerTintColor: '#191f4c'
    }
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