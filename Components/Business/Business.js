import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text
} from 'react-native';
import StarRating from './StarRating/StarRating';
import {Font} from 'expo';

Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

let business = {
    businessName: 'The Plumbers',
    imgSrc: require('./plumber.jpg'),
    businessAddress: 'Valley Arcade',
    businessCity: 'Nairobi',
    category: 'Plumbing',
    ratingObj: {ratings: 0.5, reviews: 5000}  
}
export default class Business extends Component{
    
	render() {
		return (
			<View style={styles.Business}>
                <Image style={styles.imageContainer} source={business.imgSrc} />
                <View>
                    <Text style={styles.businessName}>{business.businessName}</Text>
                    <View style={styles.businessInfo}>
                        <View style={styles.businessAddress}>
                            <Text style={styles.p}>{business.businessAddress}</Text>
                            <Text style={styles.p}>{business.businessCity}</Text>
                        </View>
                        <View style={styles.businessReviews}>
                            <Text style={styles.p}>{business.category}</Text>
                            <StarRating ratingObj={business.ratingObj} />
                        </View>
                    </View>
                </View>
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
        marginRight: 32,
        marginBottom: 8,
        marginLeft: 10
    },
    
    imageContainer: {
        width: 100,
        height: 100,
        marginBottom: 16,
        marginRight: 8
    },

    businessName: {
        marginBottom: 8,
        fontSize: 19.2,
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
    }
});