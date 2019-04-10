import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default class Header extends Component{
    render(){
      return(
        <View style={styles.container}>
            <Image style={{width: 45, height: 45}} source={require('../../assets/Jobo_Icon.png')} />
            <Text style={{fontSize: 30, color: 'rgb(25, 31, 76)'}}>{this.props.title}</Text>
          {/* <Text style={styles.darkBlue}>JO</Text>
          <View style={{borderBottomColor: '#4bc1bc', borderBottomWidth: 5}}>
            <Text style={styles.lightBlue}>BO</Text>
          </View> */}
        </View>
      );
    }
} 

const styles = StyleSheet.create({
     container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Poppins',
      alignSelf: 'center'
    }
});