import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {searching} from '../actions/RestaurantActions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '5px 16px',
    width: '348px',
    margin: '0 0 0 150px',
    background: 'transparent'
  },
}));

function SearchResults(props) {
    const classes = useStyles();
    let searchResults = [];
    if (props.cuisineTypes.cuisines) {
        searchResults = props.cuisineTypes.cuisines.filter(cuisineObj => {
            return cuisineObj.cuisine.cuisine_name.toLowerCase().includes(props.searchTerm.toLowerCase());
        })
    }
    if (props.searchTerm !== '') {
        return (
            <div className='SearchResults'>
                <Paper className={classes.root}>
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
            </div>
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