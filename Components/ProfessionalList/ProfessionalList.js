import React, {Component} from 'react';
import {StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import Professional from '../Professional/Professional';
import {Font} from 'expo';


Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

let professionals =[
    {
        category: 'Cleaner',
        imgSrc: require('../../assets/ProPics/cleaner.png')
    },
    {
        category: 'Plumber',
        imgSrc: require('../../assets/ProPics/plumber-color.png')
    },
    {
        category: 'Electrician',
        imgSrc: require('../../assets/ProPics/electrician-color.png')
    },
    {
        category: 'Gardener',
        imgSrc: require('../../assets/ProPics/gardener_landscaper-color.png')
    },
    {
        category: 'Beauty',
        imgSrc: require('../../assets/ProPics/salon_barber-color.png')
    },
    {
        category: 'Moving',
        imgSrc: require('../../assets/ProPics/cargo-truck-color.png')
    },
    {
        category: 'Cook',
        imgSrc: require('../../assets/ProPics/cook.png')
    },
    {
        category: 'Painter',
        imgSrc: require('../../assets/ProPics/painter.png')
    },
    {
        category: 'Carpenter',
        imgSrc: require('../../assets/ProPics/carpenter.png')
    },
    {
        category: 'Taxes',
        imgSrc: require('../../assets/ProPics/taxes-color.png')
    }
]


export default class ProfessionalList extends Component{
    render(){
        return(
            <FlatList style={styles.professionalList} numColumns={3} data={professionals} renderItem={({item, index}) => {return <Professional professional={item} key={index} />}} />
        );
    }
}

const styles = StyleSheet.create({
    professionalList: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'space-between',
        display: 'flex',
        /* display: 'flex',
        
        marginLeft: 4,
        alignItems: 'center', */
        marginVertical: 20
    },
    text: {
        fontFamily: 'Poppins',
        fontSize: 20
    }
})