import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Dimensions, TouchableHighlight, Image } from 'react-native';
import {Font, Constants, AppLoading, Asset} from 'expo';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Map from './Components/Map/Map';
import { MainScreenContainer} from './Components/MainScreen/MainScreen';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login'

class MapScreen extends Component{
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <Header title='Map'/>
  }

  render(){
    return(
      <View style={{flex: 1, height: Dimensions.get('window').height}}>
        <Map style={{flex: 1}}/>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Main')} underlayColor='white' style={styles.highlight}>
          <View style={styles.button}>
              <Text style={styles.p}>View Services</Text>
          </View>
        </TouchableHighlight> 
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Map: {
      screen: MapScreen
    },
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        header: null
      })
    },
    Main: {
      screen: MainScreenContainer,
      // navigationOptions: {title: 'Services'}
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        header: null,
      })
    }
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isReady: false
    }
    this.cacheResourcesAsync = this.cacheResourcesAsync.bind(this);
  }

  async cacheResourcesAsync(){
    await Font.loadAsync({
      Poppins: require('./assets/Poppins-Regular.ttf')
    });

    const images = [
      require('./assets/Jobo_Icon.png'),
      require('./assets/ProPics/builder.png'),
      require('./assets/ProPics/cargo-truck-color.png'),
      require('./assets/ProPics/carpenter.png'),
      require('./assets/ProPics/cleaner.png'),
      require('./assets/ProPics/cook.png'),
      require('./assets/ProPics/gardener_landscaper-color.png'),
      require('./assets/ProPics/painter.png'),
      require('./assets/ProPics/pctech.png'),
      require('./assets/ProPics/plumber-color.png'),
      require('./assets/ProPics/salon_barber-color.png'),
      require('./assets/ProPics/taxes-color.png'),

    ]

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages); 
  }

  render() {
    if(!this.state.isReady){
      return(
        <AppLoading 
          startAsync={this.cacheResourcesAsync}
          onFinish ={() => this.setState({isReady: true})}
          onError={console.warn}
        />
      )
    }
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
    alignSelf: 'center'
  },

  darkBlue: {
    color: '#191f4c',
    fontSize: 40,
  },

  lightBlue: {
    color: '#4bc1bc',
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
    color: '#191f4c'
  },

  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius:  5,
    borderColor: '#4bc1bc',
    height: 40,
    justifyContent: 'center' ,
    shadowColor: 'rgb(220,220,220)',
    marginLeft: 10, 
    marginRight: 10
  }
});

AppRegistry.registerComponent('Jobo', () => App);
