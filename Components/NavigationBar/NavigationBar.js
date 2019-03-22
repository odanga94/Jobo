import React, {Component} from 'react';
import {StyleSheet,View,Image,Text, Alert, TouchableHighlight} from 'react-native';


import {Font} from 'expo';

Font.loadAsync({Poppins: require('../../assets/Poppins-Regular.ttf')});

const items = [
    {
        title: 'Me',
        imgSrc: require('../../assets/NavigationBar/userProfile.png'),
        imgSrcActive: require('../../assets/NavigationBar/userProfileActive.png')
    },
    {
        title: 'Order History',
        imgSrc: require('../../assets/NavigationBar/orderHistory.png'),
        imgSrcActive: require('../../assets/NavigationBar/orderHistoryActive.png')
    },
    {
        title: 'Home',
        imgSrc: require('../../assets/NavigationBar/home.png'),
        imgSrcActive: require('../../assets/NavigationBar/homeActive.png')
    },
    {
        title: 'Support',
        imgSrc: require('../../assets/NavigationBar/support.png'),
        imgSrcActive: require('../../assets/NavigationBar/supportActive.png')
    },
    {
        title: 'Settings',
        imgSrc: require('../../assets/NavigationBar/settings.png'),
        imgSrcActive: require('../../assets/NavigationBar/settingsActive.png')
    }
]

export default class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state = {active: 'Home'};
        this.renderItems = this.renderItems.bind(this);
        //this.handlePress = this.handlePress.bind(this);
    }

    handlePress(item){
        this.setState({active: `${item.title}`})
    }

    renderItems(){
        return items.map((item) => {
            return(
                    <TouchableHighlight onPress={this.handlePress.bind(this, item)} style={styles.highlight}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Image style={styles.imageContainer} source={this.state.active === item.title ? item.imgSrcActive : item.imgSrc} />
                            <Text style={this.state.active === item.title ? [styles.text, styles.textActive] : styles.text}>{item.title}</Text>                   
                        </View>
                    </TouchableHighlight>
            )
        })
    }

    render(){
        return(
            <View style={styles.container}>
                {
                    this.renderItems()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#d6d6d6',
        height: 50
    },

    textActive: {
        color: '#3eb308'
    },

    highlight: {
        flex: 1
    },
    text: {
        color: '#8c8c8c',
        fontSize: 10,
        fontWeight: "500"
    },
    imageContainer: {
        width: 30,
        height: 30,
        margin: 2
    }

})