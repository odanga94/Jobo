import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../assets/fontello/config.json';
import {styles} from './styles';

let IconComponent = createIconSetFromFontello(fontelloConfig, 'Fontello');

export default class MainSignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            emailGotFocus: false,
            passwordGotFocus: false,
        }
           this.handleStyleChange = this.handleStyleChange.bind(this);
    }

    handleStyleChange(name, value){
        this.setState({[name]: !value});
    }

    render(){
        return(
            <View>
        
                <TouchableOpacity onPress={this.props.handleSignIn} style={[styles.button, {marginTop: 20}]}>
                    <Image source={require('../../assets/facebook.png')} style={{width: 50, height: 50}} />
                    <View style={[{backgroundColor: '#39559F'}, styles.textContainer]}>
                        <Text style={styles.buttonText}>Log in with Facebook</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.handleSignIn} style={styles.button}>
                    <View style={{backgroundColor: 'rgba(231, 67, 54, 0.7)'}}>
                        <Image source={require('../../assets/google.png')} style={{width: 50, height: 50}} />
                    </View>
                    <View style={[{backgroundColor: '#E74336'}, styles.textContainer]}>
                        <Text style={styles.buttonText}>Log in with Google</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={styles.line}></View>
                    <Text style={styles.formLabel}>OR</Text>
                    <View style={styles.line}></View>
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
                <TouchableOpacity onPress={this.props.handleSignIn} style={[styles.button, styles.signIn]}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}