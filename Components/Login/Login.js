import React, { Component } from 'react';
import { Text, StyleSheet, View, Alert, Image } from 'react-native';
import LoginForm from './LoginForm';
import axios from 'axios';
import baseUrl from '../../baseUrl';

axios.defaults.baseURL = baseUrl;

export default class Login extends Component {
  constructor(props){
      super(props);
      this.state = {
          firstName: 'John',
          lastName: 'Odanga',
          phoneNumber: '0799848807',
          email: 'odangajohn@gmail.com',
          password: 'jobopass',
          errorMessage: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSignIn = this.handleSignIn.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(name, value){
      this.setState({
          [name]: value
      })
  }

  async handleSignUp(){
    try{
      const { firstName, lastName, phoneNumber, email, password } = this.state;
      await axios.post('/users/auth/signup', { firstName, lastName, phoneNumber, email, password });
      this.handleSignIn();
    } catch(error){
      this.setState({errorMessage: error.response.data.error.message})
    }
  }

  async handleSignIn(){
    this.setState({errorMessage: ''});
    try{
      const { email, password } = this.state;
      const result = await axios.post('/users/auth/login', { email, password });
      // Alert.alert('', result.data.token);
      this.props.handleChangeToken(result.data.token);
    } catch(error){
      //console.log(error.response.data);
      this.setState({errorMessage: error.response.data.error.message});
      //console.error(error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/Jobo_Icon.png')} style={styles.logo} />
        <LoginForm 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          password={this.state.password} 
          handleChange={this.handleChange}
          handleSignIn={this.handleSignIn}
          handleSignUp={this.handleSignUp}
        />
        <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    errorMessage: {
      marginHorizontal: 5,
      fontSize: 18,
      color: 'red',
      fontWeight: 'bold',
      fontFamily: 'Poppins'
    },

    headerText: {
      fontSize: 44,
      color: 'rgb(25, 31, 76)',
      marginTop: 30,
      marginBottom: 10,
      textAlign: 'center',
      fontWeight: "200",
      fontFamily: 'Poppins'
    },
    logo: {
      width: 200,
      height: 200,
      alignSelf: 'center'
    }
})
