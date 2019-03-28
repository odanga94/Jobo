import React, {Component} from 'react';
import {StyleSheet, ScrollView, FlatList, Text, View} from 'react-native';
import Professional from '../Professional/Professional';
import {Font} from 'expo';


Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

let professionals =[
    {
        category: 'Cleaner',
        imgSrc: require('../../assets/ProPics/cleaner.png'),
    },
    {
        category: 'Plumber',
        imgSrc: require('../../assets/ProPics/plumber-color.png'),
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
    },
    {
        category: 'Builder',
        imgSrc: require('../../assets/ProPics/builder.png')
    }
]


export default class ProfessionalList extends Component{
    constructor(props){
        super(props);
        this.state = {numColumns: 3}
    }

    formatData(data, numColumns){
        const numberOfFullRows = Math.floor(data.length / numColumns);
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0){
            data.push({});
            numberOfElementsLastRow++;
        }
        return data;
    }

    render(){
        return(
            <FlatList style={styles.professionalList} numColumns={3} data={this.formatData(professionals, this.state.numColumns)}
             renderItem={({item, index}) => {return Object.keys(item).length !== 0 ? <Professional professional={item} key={index} handlePress={this.props.handlePress} /> : <View style={[styles.item, styles.itemInvisible]} key={index} /> }} />
        );
    }
}

const styles = StyleSheet.create({
    professionalList: {
        flex: 1,
        justifyContent: 'space-between',
        display: 'flex',
        /* display: 'flex',     
        marginLeft: 4,
        alignItems: 'center', */
        //marginVertical: 20,
        marginLeft: 2,
        marginRight: 2
    },

    itemInvisible: {
        flex: 1,
        backgroundColor: 'transparent'
    },

    text: {
        fontFamily: 'Poppins',
        fontSize: 20
    }
})