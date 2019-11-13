import React from 'react';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import {searching} from '../actions/RestaurantActions';


function SearchResults(props) {
    let searchResults = [];
    if (props.cuisineTypes.cuisines) {
        searchResults = props.cuisineTypes.cuisines.filter(cuisineObj => {
            return cuisineObj.cuisine.cuisine_name.toLowerCase().includes(props.searchTerm.toLowerCase());
        })
    }
    if (props.searchTerm !== '') {
        return (
            <Paper className='SearchResults'>
                <ul>
                    {searchResults.length ? 
                        searchResults.map(cuisineObj => {
                            return  <li onClick={(e) => props.searching(e.target.innerText)} 
                                        key={cuisineObj.cuisine.cuisine_id}>
                                        {cuisineObj.cuisine.cuisine_name}
                                    </li>
                        })
                    : 'No matches found ...'}
                </ul>
            </Paper>
        );
    } else {
        return (
            null
        );
    }
}

function msp (state) {
    return{
        cuisineTypes: state.restaurant.cuisineTypes,
        searchTerm: state.restaurant.searchTerm
    };
};

export default connect(msp,{searching})(SearchResults);