import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

/* const sortByOptions = {
    "Best Match" : "best_match",
    "Highest Rated" : "rating", 
    "Most Reviewed" : "review_count",
} */


export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm : '',
            location : '',
            sortBy : 'best_match'
        };
        /* this.getSortByClass = this.getSortByClass.bind(this); */
        // this.handleSortByChange = this.handleSortByChange.bind(this);
        // this.handleTermChange = this.handleTermChange.bind(this);
        // this.handleLocationChange = this.handleLocationChange.bind(this);
        // this.handleSearch = this.handleSearch.bind(this);
    }

    /* getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        } else{
            return '';
        }
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy : sortByOption});
    } 

    handleTermChange(event){
        this.setState({term : event.target.value});
    }

    handleLocationChange(event){
        this.setState({location : event.target.value});
    }

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    renderSortByOptions(){
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
        });
    } */

    render(){
        return (
            <View className="SearchBar" style={styles.SearchBar}>
                {
                    /* <View className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                    </View> */
                }
                <View className="SearchBar-fields">
                    <TextInput style={[styles.textInput, {marginBottom: 4}]} placeholder="Search for a Professional" onChangeText={(text) => {this.setState({searchTerm: text})}}/>
                    <TextInput style={styles.textInput} placeholder="Where?" onChangeText={(text) => {this.setState({location: text})}} />
                </View>
                {
                    /* <View className="SearchBar-submit">
                        <a  onClick={this.handleSearch}>Let's Go</a>
                    </View> */
                }
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        SearchBar: {
            display: 'flex',
            justifyContent: 'center',

        },

        textInput: {
            fontSize: 17,
            paddingTop: 10.56,
            paddingBottom: 10.56,
            paddingRight: 16,
            paddingLeft: 16,
            borderWidth: 1,
            borderColor: '#DCDCDC',
            borderRadius: 4
        }
    }
)