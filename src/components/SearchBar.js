import React from 'react';
import {connect} from 'react-redux';
import {searching, search} from '../actions/RestaurantActions';
import Sorter from '../Material-UI/Sorter';
import Order from '../Material-UI/Order';

function SearchBar (props) {

    return (
        <div>
            <form 
                onSubmit={(e) => {
                    e.preventDefault(); 
                    props.search(props.searchTerm, props.start, props.lat, props.lon, props.sort, props.order);
                    props.history.push('/restaurants')
                }} 
                className="search"
            >
                <input 
                    type="search" 
                    placeholder="Find something to eat ..." 
                    value={props.searchTerm}
                    onChange={(e) => props.searching(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
                <Sorter />
                <Order />
            </form>
        </div>
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
    search
})(SearchBar);

