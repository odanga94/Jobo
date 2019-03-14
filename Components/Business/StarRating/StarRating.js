import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text
} from 'react-native';
import {Font} from 'expo';

Font.loadAsync({Poppins: require('../../../assets/Poppins-Regular.ttf')});



export default class StarRating extends Component{
	render() {
		// Recieve the ratings object from the props
		let ratingObj = this.props.ratingObj;

		// This array will contain our star tags. We will include this
		// array between the view tag.
		let stars = [];
		// Loop 5 times
		for (let i = 1; i < 6; i++) {
			// set the path to filled stars
			let path = require('./star-filled.png');
			// If ratings is lower, set the path to unfilled stars
			if (i > Math.round(ratingObj.ratings)) {
				path = require('./star-unfilled.png');
			}

			stars.push((<Image style={styles.image} source={path} />));
		}

		return (
			<View style={ styles.container }>
				{ stars }
				<Text style={styles.text}>{`(${ratingObj.reviews} reviews)`}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	},
	image: {
		width: 25,
		height: 25
	},
	text: {
		fontSize: 17,
		marginLeft: 10,
		marginRight: 10,
		fontFamily: 'Poppins',
		color: '#3eb308'
	}
});