import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {Font, Constants} from 'expo';
import ProfessionalList from './Components/ProfessionalList/ProfessionalList';
// import BusinessList from './Components/BusinessList/BusinessList';
import SearchBar from './Components/SearchBar/SearchBar';
import Map from './Components/Map/Map';

Font.loadAsync({Poppins: require('./assets/Poppins-Regular.ttf')});

/* let businesses = [
  {
      businessName: 'The Plumbers',
      imgSrc: require('./assets/BusinessPics/plumber.jpg'),
      businessAddress: 'Valley Arcade',
      businessCity: 'Nairobi',
      category: 'Plumbing and Home Repairs',
      ratingObj: {ratings: 0.5, reviews: 5000},
      id: 1  
  },
  {
      businessName: 'Plumber & Sons',
      imgSrc: require('./assets/BusinessPics/plumber2.jpg'),
      businessAddress: 'BuruBuru',
      businessCity: 'Nairobi',
      category: 'Plumbing and Home Repairs',
      ratingObj: {ratings: 3, reviews: 500},
      id: 2  
  },
  {
      businessName: 'OG Plumber',
      imgSrc: require('./assets/BusinessPics/plumber3.jpg'),
      businessAddress: 'Westlands',
      businessCity: 'Nairobi',
      category: 'Plumbing and Home Repairs',
      ratingObj: {ratings: 5, reviews: 10}, 
      id: 3 
  },
  {
      businessName: 'Plumber 4',
      imgSrc: require('./assets/BusinessPics/plumber4.jpg'),
      businessAddress: 'Langata',
      businessCity: 'Nairobi',
      category: 'Plumbing and Home Repairs',
      ratingObj: {ratings: 3.2, reviews: 77},
      id: 4  
  },
  {
      businessName: 'Plumber 5',
      imgSrc: require('./assets/BusinessPics/plumber5.jpg'),
      businessAddress: 'South C',
      businessCity: 'Nairobi',
      category: 'Plumbing and Home Repairs',
      ratingObj: {ratings: 2, reviews: 2},
      id: 5  
  },
  {
      businessName: 'Plumber 6',
      imgSrc: require('./assets/BusinessPics/plumber.jpg'),
      businessAddress: 'Valley Arcade',
      businessCity: 'Nairobi',
      category: 'Plumbing and Home Repairs',
      ratingObj: {ratings: 5, reviews: 5000},
      id: 6  
  },
  {
      businessName: 'Plumber 7',
      imgSrc: require('./assets/BusinessPics/plumber2.jpg'),
      businessAddress: 'Valley Arcade',
      businessCity: 'Nairobi',
      category: 'Plumbing and Home Repairs',
      ratingObj: {ratings: 2.7, reviews: 300},
      id: 7  
  },
  {
      businessName: 'Plumber 8',
      imgSrc: require('./assets/BusinessPics/plumber3.jpg'),
      businessAddress: 'Karen',
      businessCity: 'Nairobi',
      category: 'Plumbing and Home Repairs',
      ratingObj: {ratings: 4.1, reviews: 80},
      id: 8  
  },
  {
      businessName: 'Plumber 9',
      imgSrc: require('./assets/BusinessPics/plumber4.jpg'),
      businessAddress: 'Ruaka',
      businessCity: 'Nairobi',
      category: 'Plumbing and Home Repairs',
      ratingObj: {ratings: 1.2, reviews: 456},
      id: 9  
  },
  {
      businessName: 'Plumber 10',
      imgSrc: require('./assets/BusinessPics/plumber5.jpg'),
      businessAddress: 'Umoja',
      businessCity: 'Nairobi',
      category: 'Plumbing and Home Repairs',
      ratingObj: {ratings: 3.8, reviews: 700},
      id: 10  
  }
] */

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchResults: []}
  }

  searchBusinessByCategory(category, location){
    /* Insert method here to search businesses by category i.e. plumber, electrician etc.
       Pass the method as an event handler when the user presses search
       Pass the results to BusinessList so they can be rendered
    */

  }
  render() {
    return (
      <View style={styles.bigContainer}>
        <View style={styles.container}>
          <Text style={{fontSize: 40}}>J</Text>
          <Text style={styles.green}>o</Text>
          <Text style={styles.yellow}>b</Text>
          <Text style={styles.red}>o</Text>
        </View>
        {/* <SearchBar />
        <BusinessList businesses={businesses}/> 
        <Map /> 
        <ProfessionalList/> */ }
        <Map />
      </View>  
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
    backgroundColor: '#fff',
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
  }
});

AppRegistry.registerComponent('Jobo', () => App);
