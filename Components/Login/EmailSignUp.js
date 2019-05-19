import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../assets/fontello/config.json';
import {styles} from './styles';

let IconComponent = createIconSetFromFontello(fontelloConfig, 'Fontello');

export default class EmailSignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
         firstNameGotFocus: false,
         lastNameGotFocus: false,
         emailGotFocus: false,
         passwordGotFocus: false,
         phoneGotFocus: false,
        }
        this.handleStyleChange = this.handleStyleChange.bind(this);
    }
    
    handleStyleChange(name, value){
        this.setState({[name]: !value});
    }

    render(){
        return (
            <ScrollView>
              <Text style={styles.formLabel}>First Name:</Text>
              <View style={!this.state.firstNameGotFocus ? styles.inputContainer : [styles.inputContainer, {borderColor: '#4bc1bc', shadowColor: '#4bc1bc'}]}>
                <TextInput 
                    style={styles.input} 
                    placeholder='First Name'
                    placeholderTextColor='#a9a9a9'
                    autoCorrect={false}
                    value={this.props.firstName}
                    onChangeText={(firstName) => {this.props.handleChange('firstName', firstName)}}
                    onFocus={() => this.handleStyleChange('firstNameGotFocus', this.state.firstNameGotFocus)}
                    onEndEditing={() => this.handleStyleChange('firstNameGotFocus', this.state.firstNameGotFocus)}
                />
              </View>
              <Text style={styles.formLabel}>Last Name:</Text>
              <View style={!this.state.lastNameGotFocus ? styles.inputContainer : [styles.inputContainer, {borderColor: '#4bc1bc', shadowColor: '#4bc1bc'}]}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Last Name'
                    placeholderTextColor='#a9a9a9'
                    autoCorrect={false}
                    value={this.props.lastName}
                    onChangeText={(lastName) => {this.props.handleChange('lastName', lastName)}}
                    onFocus={() => this.handleStyleChange('lastNameGotFocus', this.state.lastNameGotFocus)}
                    onEndEditing={() => this.handleStyleChange('lastNameGotFocus', this.state.lastNameGotFocus)}
                />
              </View>
              <Text style={styles.formLabel}>Phone:</Text>
              <View style={!this.state.phoneGotFocus ? styles.inputContainer : [styles.inputContainer, {borderColor: '#4bc1bc', shadowColor: '#4bc1bc'}]}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Phone Number'
                    placeholderTextColor='#a9a9a9'
                    keyboardType='phone-pad'
                    autoCorrect={false}
                    value={this.props.phoneNumber}
                    onChangeText={(phoneNumber) => {this.props.handleChange('phoneNumber', phoneNumber)}}
                    onFocus={() => this.handleStyleChange('phoneGotFocus', this.state.phoneGotFocus)}
                    onEndEditing={() => this.handleStyleChange('phoneGotFocus', this.state.phoneGotFocus)}
                />
              </View>
              <Text style={styles.formLabel}>Email:</Text>
              <View style={!this.state.emailGotFocus ? styles.inputContainer : [styles.inputContainer, {borderColor: '#4bc1bc', shadowColor: '#4bc1bc'}]}>
                <IconComponent 
                  name='mail-alt' size={25}
                  style={styles.inputIcon}
                  color='rgb(25, 31, 76)'
                /> 
                <TextInput 
                    style={styles.input} 
                    placeholder='your@email.com'
                    placeholderTextColor='#a9a9a9'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.props.email}
                    onChangeText={(email) => {this.props.handleChange('email', email)}}
                    onFocus={() => this.handleStyleChange('emailGotFocus', this.state.emailGotFocus)}
                    onEndEditing={() => this.handleStyleChange('emailGotFocus', this.state.emailGotFocus)}
                />
              </View>
              <Text style={styles.formLabel}>Password:</Text>
              <View style={!this.state.passwordGotFocus ? styles.inputContainer: [styles.inputContainer, {borderColor: '#4bc1bc'}]}>
                <IconComponent name='key' size={25} style={styles.inputIcon} color='rgb(25, 31, 76)'/>
                <TextInput 
                    style={styles.input} 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    secureTextEntry 
                    placeholder='Password'
                    placeholderTextColor='#a9a9a9'
                    value={this.props.password}
                    onChangeText={(password) => {this.props.handleChange('password', password)}}
                    onFocus={() => this.handleStyleChange('passwordGotFocus', this.state.passwordGotFocus)}
                    onEndEditing={() => this.handleStyleChange('passwordGotFocus', this.state.passwordGotFocus)}
                />
              </View>
              <TouchableOpacity onPress={this.props.handleSignUp} style={[styles.button, styles.signIn]}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </ScrollView>
        );
    }
}