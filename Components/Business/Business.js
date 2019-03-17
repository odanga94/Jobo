import React, { Component } from 'react';
import {StyleSheet,View,Image,Text, Alert, TouchableHighlight} from 'react-native';	
import StarRating from './StarRating/StarRating';
import {Font} from 'expo';

Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

/* let this.props.business = {
    businessName: 'The Plumbers',
    imgSrc: require('./plumber.jpg'),
    businessAddress: 'Valley Arcade',
    businessCity: 'Nairobi',
    category: 'Plumbing and Home Repairs',
    ratingObj: {ratings: 0.5, reviews: 5000}  
}*/

export default class Business extends Component{
    onPressButton(){
        Alert.alert('You should be directed to request service page');
    }
    
	render() {
		return (
            <View style={{display: 'flex', margin: 8, borderBottomWidth: 1, borderBottomColor: '#DCDCDC'}}>
                <View style={styles.Business}>
                    <Image style={styles.imageContainer} source={this.props.business.imgSrc} />
                    <View>
                        <Text style={styles.businessName}>{this.props.business.businessName}</Text>
                        <View style={styles.businessInfo}>
                            <Text style={styles.p}>{this.props.business.category}</Text>
                            <View style={styles.businessAddress}>
                                <Text style={styles.p}>{this.props.business.businessAddress}</Text>
                                <Text style={styles.p}>{this.props.business.businessCity}</Text>
                            </View>
                            <View style={styles.businessReviews}>
                                <StarRating ratingObj={this.props.business.ratingObj} />
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableHighlight onPress={this.onPressButton} underlayColor='white' style={{marginBottom: 8}}>
                    <View style={styles.button}>
                        <Text style={[styles.p, {fontWeight: '400'}]}>Request Service</Text>
                    </View>
                </TouchableHighlight>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	Business: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 160,
        marginTop: 8,
        marginBottom: 4,
    },
    
    imageContainer: {
        width: 100,
        height: 100,
        marginBottom: 8,
        marginRight: 8
    },

    businessName: {
        marginBottom: 8,
        fontSize: 20,
        fontWeight: '600'
    },

    businessInfo: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    p: {
        fontSize: 17,
        fontWeight: '300',
        lineHeight: 16,
        fontFamily: 'Poppins',
        color: '#3eb308'
    },

    businessAddress: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    businessReviews: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#3eb308'
    },

    button: {
     alignItems: 'center',
     backgroundColor: 'rgba(220, 220, 220, 0.8)',
     borderRadius:  10,
     height: 40,
     justifyContent: 'center'  
    }

});