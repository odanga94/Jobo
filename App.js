import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Dimensions, TouchableHighlight } from 'react-native';
import {Font, Constants} from 'expo';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import ProfessionalList from './Components/ProfessionalList/ProfessionalList';
// import BusinessList from './Components/BusinessList/BusinessList';
import Map from './Components/Map/Map';
import NavigationBar from './Components/NavigationBar/NavigationBar';


Font.loadAsync({Poppins: require('./assets/Poppins-Regular.ttf')});

class HeaderMap extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>J</Text>
        <Text style={styles.green}>o</Text>
        <Text style={styles.yellow}>b</Text>
        <Text style={styles.red}>o</Text>
      </View>
    );
  }
} 

class HeaderServices extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>S</Text>
        <Text style={{fontSize: 40}}>e</Text>
        <Text style={{fontSize: 40}}>r</Text>
        <Text style={styles.green}>v</Text>
        <Text style={styles.yellow}>i</Text>
        <Text style={styles.red}>c</Text>
        <Text style={{fontSize: 40}}>e</Text>
        <Text style={{fontSize: 40}}>s</Text>
      </View>
    );
  }
} 

class MapScreen extends Component{
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <HeaderMap/>
  }

  render(){
    return(
      <View style={{flex: 1, height: Dimensions.get('window').height}}>
        <Map style={{flex: 1}}/>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Services')} underlayColor='white' style={styles.highlight}>
          <View style={styles.button}>
              <Text style={styles.p}>View Services</Text>
          </View>
        </TouchableHighlight> 
      </View>
    );
  }
}


class ServicesScreen extends Component{
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <HeaderServices/>
  }

  render(){
    return(
      <View style={styles.bigContainer}>
          {/* <View style={styles.container}>
            <Text style={{fontSize: 40}}>J</Text>
            <Text style={styles.green}>o</Text>
            <Text style={styles.yellow}>b</Text>
            <Text style={styles.red}>o</Text>
          </View> */}
          <ProfessionalList/> 
          <NavigationBar />
      </View>  
    );
  }
}
const RootStack = createStackNavigator(
  {
    Map: {
      screen: MapScreen
    },
    Services: {
      screen: ServicesScreen
    }
  },
  {
    initialRouteName: 'Map'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
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
    fontSize: 40
  },

  red: {
    color: '#e20d0d',
    fontSize: 40
  },

  yellow: {
    color: '#f0d817',
    fontSize: 40
  },

  highlight: {
    bottom: 30,
    flex: 1,
    position: "absolute",
    width: Dimensions.get('window').width
  },

  p: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#3eb308'
  },

  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:  5,
    height: 40,
    justifyContent: 'center' ,
    shadowColor: 'rgb(220,220,220)',
    marginLeft: 10, 
    marginRight: 10
  }
});

AppRegistry.registerComponent('Jobo', () => App);
