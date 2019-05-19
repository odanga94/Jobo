import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../assets/fontello/config.json';
import {styles} from './styles';

let IconComponent = createIconSetFromFontello(fontelloConfig, 'Fontello');

export default class MainSignUp extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text style={[styles.formLabel, {alignSelf: 'center', fontSize: 23}]}>New to Jobo? Sign Up!</Text>
                <TouchableOpacity onPress={this.props.handleSignIn} style={[styles.button, {marginTop: 20}]}>
                    <Image source={require('../../assets/facebook.png')} style={{width: 50, height: 50}} />
                    <View style={[{backgroundColor: '#39559F'}, styles.textContainer]}>
                        <Text style={styles.buttonText}>Sign up with Facebook</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.handleSignIn} style={styles.button}>
                    <View style={{backgroundColor: 'rgba(231, 67, 54, 0.7)'}}>
                        <Image source={require('../../assets/google.png')} style={{width: 50, height: 50}} />
                    </View>
                    <View style={[{backgroundColor: '#E74336'}, styles.textContainer]}>
                        <Text style={styles.buttonText}>Sign up with Google</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={styles.line}></View>
                    <Text style={styles.formLabel}>OR</Text>
                    <View style={styles.line}></View>
                </View>
                <TouchableOpacity 
                    onPress={() => {
                        this.props.handleSignUpTypeChange();
                        this.props.handleShowOptionsChange();
                    }} 
                    style={[styles.button, {height: 50}]}
                >
                    <View style={{backgroundColor: 'rgb(25, 31, 76)', alignItems: 'center', justifyContent: 'center'}}>
                        <IconComponent 
                        name='mail-alt' size={30}
                        color='white'
                        style={{marginLeft: 10}}
                        /> 
                    </View>
                    <View style={[{backgroundColor: 'rgb(25, 31, 76)'}, styles.textContainer]}>
                        <Text style={styles.buttonText}>Sign up with Email</Text>
                    </View>
                </TouchableOpacity>
                <Text style={[styles.formLabel, {alignSelf: 'center'}]}>By Signing up you agree to Jobo's Terms of Use and Privacy Policy</Text>
            </View>
        );
    }
}