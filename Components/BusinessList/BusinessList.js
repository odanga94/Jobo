import React, {Component} from 'react';
import {StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import Business from '../Business/Business';
import {Font} from 'expo';

Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});


/* let businesses = [
    {
        businessName: 'The Plumbers',
        imgSrc: require('../../assets/BusinessPics/plumber.jpg'),
        businessAddress: 'Valley Arcade',
        businessCity: 'Nairobi',
        category: 'Plumbing and Home Repairs',
        ratingObj: {ratings: 0.5, reviews: 5000},
        id: 1  
    },
    {
        businessName: 'Plumber & Sons',
        imgSrc: require('../../assets/BusinessPics/plumber2.jpg'),
        businessAddress: 'BuruBuru',
        businessCity: 'Nairobi',
        category: 'Plumbing and Home Repairs',
        ratingObj: {ratings: 3, reviews: 500},
        id: 2  
    },
    {
        businessName: 'OG Plumber',
        imgSrc: require('../../assets/BusinessPics/plumber3.jpg'),
        businessAddress: 'Westlands',
        businessCity: 'Nairobi',
        category: 'Plumbing and Home Repairs',
        ratingObj: {ratings: 5, reviews: 10}, 
        id: 3 
    },
    {
        businessName: 'Plumber 4',
        imgSrc: require('../../assets/BusinessPics/plumber4.jpg'),
        businessAddress: 'Langata',
        businessCity: 'Nairobi',
        category: 'Plumbing and Home Repairs',
        ratingObj: {ratings: 3.2, reviews: 77},
        id: 4  
    },
    {
        businessName: 'Plumber 5',
        imgSrc: require('../../assets/BusinessPics/plumber5.jpg'),
        businessAddress: 'South C',
        businessCity: 'Nairobi',
        category: 'Plumbing and Home Repairs',
        ratingObj: {ratings: 2, reviews: 2},
        id: 5  
    },
    {
        businessName: 'Plumber 6',
        imgSrc: require('../../assets/BusinessPics/plumber.jpg'),
        businessAddress: 'Valley Arcade',
        businessCity: 'Nairobi',
        category: 'Plumbing and Home Repairs',
        ratingObj: {ratings: 5, reviews: 5000},
        id: 6  
    },
    {
        businessName: 'Plumber 7',
        imgSrc: require('../../assets/BusinessPics/plumber2.jpg'),
        businessAddress: 'Valley Arcade',
        businessCity: 'Nairobi',
        category: 'Plumbing and Home Repairs',
        ratingObj: {ratings: 2.7, reviews: 300},
        id: 7  
    },
    {
        businessName: 'Plumber 8',
        imgSrc: require('../../assets/BusinessPics/plumber3.jpg'),
        businessAddress: 'Karen',
        businessCity: 'Nairobi',
        category: 'Plumbing and Home Repairs',
        ratingObj: {ratings: 4.1, reviews: 80},
        id: 8  
    },
    {
        businessName: 'Plumber 9',
        imgSrc: require('../../assets/BusinessPics/plumber4.jpg'),
        businessAddress: 'Ruaka',
        businessCity: 'Nairobi',
        category: 'Plumbing and Home Repairs',
        ratingObj: {ratings: 1.2, reviews: 456},
        id: 9  
    },
    {
        businessName: 'Plumber 10',
        imgSrc: require('../../assets/BusinessPics/plumber5.jpg'),
        businessAddress: 'Umoja',
        businessCity: 'Nairobi',
        category: 'Plumbing and Home Repairs',
        ratingObj: {ratings: 3.8, reviews: 700},
        id: 10  
    }
] */

export default class BusinessList extends Component{
    render(){
        let data = this.props.businesses
        return(
            /* <ScrollView style={styles.businessList}>
                {
                    this.props.businesses ? this.props.businesses.map((business) => {return <Business business={business} key={business.id} />}) : null
                }
            </ScrollView> */
             data ? <FlatList style={styles.businessList} data={data} renderItem={({item}) => {return <Business business={item} />}} /> : 
            <Text style={styles.text}>Sorry, there are no results.</Text> 

        );
    }
}

const styles = StyleSheet.create({
    businessList: {
        display: 'flex',
    },
    text: {
        fontFamily: 'Poppins',
        fontSize: 20
    }
})