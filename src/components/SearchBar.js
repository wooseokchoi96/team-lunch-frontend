import React from 'react';
import {connect} from 'react-redux';
import {searching, search, clear} from '../actions/RestaurantActions';

function SearchBar (props) {

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault(); 
                props.search(props.searchTerm, props.start, props.lat, props.lon, props.sort, props.order);
                props.clear();
            }} 
            className="search"
        >
            <input 
                type="search" 
                placeholder="Search for cuisine ..." 
                value={props.searchTerm}
                onChange={(e) => props.searching(e.target.value)}
                required
            />
            <button type="submit">Search</button>
        </form>
    );

};

function msp (state) {
    return{
        searchTerm: state.restaurant.searchTerm,
        lat: state.restaurant.lat,
        lon: state.restaurant.lon,
        sort: state.restaurant.sort,
        order: state.restaurant.order,
        start: state.restaurant.start
    };
};

export default connect(msp, {
    searching,
    search,
    clear
})(SearchBar);

