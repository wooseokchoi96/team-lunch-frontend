import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllCuisineTypes, setLat, setLon} from '../actions/RestaurantActions';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

class Home extends Component {

    componentDidMount(){
        this.getLocation();
    }

    render(){
        if (this.props.lat && this.props.lon) {
            this.props.getAllCuisineTypes(this.props.lat, this.props.lon);
        }
        console.log('results', this.props.results)
        return(
            <div>
                <SearchBar />
                <SearchResults />
            </div>
        );
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    success = (pos) => {
        const coords = pos.coords;
        const lat = coords.latitude;
        const lon = coords.longitude;
        console.log('lat', lat)
        console.log('lon', lon)
        this.props.setLat(lat);
        this.props.setLon(lon);
    };

    error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };
};

function msp (state) {
    return {
        lat: state.restaurant.lat,
        lon: state.restaurant.lon,
        results: state.restaurant.results
    };
};

export default connect(msp,{
    getAllCuisineTypes,
    setLat,
    setLon
})(Home);