import React from 'react';
import {StyleSheet,View,Image,Text, Alert, TouchableHighlight, Dimensions} from 'react-native';	
// import MapView  from 'react-native-maps';
import {Font, MapView, PROVIDER_GOOGLE} from 'expo';

Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});


export default class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {region: {}}
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
  }

  getCurrentPosition() {
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          };
          this.setState({region: region});
        },
        (error) => {
          //TODO: better design
          switch (error.code) {
            case 1:
              if (Platform.OS === "ios") {
                Alert.alert("Please allow this app to access your location in settings");
              } else {
                Alert.alert("Please allow this app to access your location in settings");
              }
              break;
            default:
              Alert.alert("Error accessing location");
          }
        }
      );
    } catch(e) {
      alert(e.message || "");
    }
  }


  componentWillMount(){
    this.getCurrentPosition();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={this.state.region}
          style={{flex: 1}}
          /* initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} */ showsUserLocation={true}
        />
       {/* <TouchableHighlight onPress={this.onPressButton} underlayColor='white' style={styles.highlight}>
            <View style={styles.button}>
                <Text style={styles.p}>View Services</Text>
            </View>
        </TouchableHighlight> */}
      </View>     
    );
  }
}

const styles = StyleSheet.create({
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
})
