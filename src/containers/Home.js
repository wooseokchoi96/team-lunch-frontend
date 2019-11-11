import React from 'react';
import {connect} from 'react';
import {getAllCuisineTypes} from '../actions/RestaurantActions';

function Home (props) {

    const coords = getLocation();
    const lat = coords.latitude;
    const lon = coords.longitude;
    props.getAllCuisineTypes(lat, lon);

    return(
        <div>
            <h1>Home Page</h1>
        </div>
    );

};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
};

function showPosition(position) {
    return position.coords;
};

export default connect(null,{
    getAllCuisineTypes
})(Home);