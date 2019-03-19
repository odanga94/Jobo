import React, { Component } from 'react';
import {StyleSheet,View,Image,Text, Alert, TouchableHighlight} from 'react-native';	
import {Font} from 'expo';

Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

/* let professional = {
    category: 'Electrician',
    imgSrc: require('../../assets/ProPics/electrician-color.png')
} */

export default class Professional extends Component{
    onPressButton(){
        Alert.alert('You should be directed to request service page');
    }
    
	render() {
		return (
            <TouchableHighlight onPress={this.onPressButton} underlayColor='white' style={styles.highlight}>
                <View style={styles.Professional}>
                    <Image style={styles.imageContainer} source={this.props.professional.imgSrc} />
                    <Text style={styles.category}>{this.props.professional.category}</Text>
                </View>
            </TouchableHighlight>
            /* <TouchableHighlight onPress={this.onPressButton} underlayColor='white' style={{marginBottom: 8}}>
                <View style={styles.button}>
                    <Text style={[styles.p, {fontWeight: '400'}]}>Request Service</Text>
                </View>
                </TouchableHighlight> */ 
		);
	}
}

const styles = StyleSheet.create({
    highlight: {
        //width: 100,
        //height: 110,
        borderWidth: 2, 
        borderColor: 'white',
        flex: 1
    },

	Professional: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4
        // width: 160,
        // </View>marginTop: 8,
        // marginBottom: 4,
    },
    
    imageContainer: {
        width: 100,
        height: 100,
        margin: 5
    },
    
    category: {
        fontSize: 17,
        fontWeight: '600',
        fontFamily: 'Poppins',
        color: '#3eb308'
    },
});