import React, { Component } from 'react';
import EmailLogin from './EmailLogin';
import MainLogin from './MainLogin';


export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      mainLogin: true
    }
    this.handleLoginTypeChange = this.handleLoginTypeChange.bind(this);
  }

  handleLoginTypeChange(){
    this.setState({mainLogin: !this.state.mainLogin})
  }

  render() {
    return(
      this.state.mainLogin ? 
      <MainLogin handleSignIn={this.props.handleSignIn} handleLoginTypeChange={this.handleLoginTypeChange} /> : 
      <EmailLogin handleSignIn={this.props.handleSignIn} handleLoginTypeChange={this.handleLoginTypeChange} handleChange={this.props.handleChange}/>
    );
  }
}


