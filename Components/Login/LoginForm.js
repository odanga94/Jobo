import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import EmailSignUp from './EmailSignUp';
import MainSignUp from './MainSignUp';


export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      signUpMode: true,
      mainSignUp: true,
      showoptions: true,
    }
    this.handleSignUpTypeChange = this.handleSignUpTypeChange.bind(this);
    this.handleSignUporLogIn = this.handleSignUporLogIn.bind(this);
    this.handleShowOptionsChange = this.handleShowOptionsChange.bind(this);
  }
  
  handleShowOptionsChange(){
    this.setState({showoptions: !this.state.showoptions})
  }

  handleSignUpTypeChange(){
    this.setState({mainSignUp: !this.state.mainSignUp})
  }

  handleSignUporLogIn(){
    this.setState({signUpMode: !this.state.signUpMode});
  }

  render() {
    return(
      <View>
        {this.state.showoptions ?
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.handleSignUporLogIn} style={this.state.signUpMode ? styles.activeButton : styles.button}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleSignUporLogIn} style={!this.state.signUpMode ? styles.activeButton : styles.button}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View> : null }
        {this.state.signUpMode ? 
        this.state.mainSignUp ? 
        <MainSignUp handleShowOptionsChange={this.handleShowOptionsChange} handleSignIn={this.props.handleSignUp} handleSignUpTypeChange={this.handleSignUpTypeChange} /> : 
        <EmailSignUp 
          handleShowOptionsChange={this.handleShowOptionsChange}
          handleSignUp={this.props.handleSignUp} 
          handleSignUpTypeChange={this.handleSignUpTypeChange} 
          handleChange={this.props.handleChange}
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          phoneNumber={this.props.phoneNumber}
          email={this.props.email}
          password={this.props.password}
        /> :  null     
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 15
  },
  activeButton: {
    borderBottomColor: '#4bc1bc',
    borderBottomWidth: 4,
    flex: 1
  },
  button: {
    borderBottomColor: '#a6a6a6',
    borderBottomWidth: 2,
    flex: 1
  },
  buttonText: {
    fontSize: 23,
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: 'rgb(25, 31, 76)'
  }
})
