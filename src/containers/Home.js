import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllCuisineTypes, setLat, setLon, getPhotos, getBackground, clear} from '../actions/RestaurantActions';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';


class Home extends Component {

    componentDidMount() {
        this.getLocation()
        this.props.clear()
        this.props.getBackground()
        this.props.getPhotos()
    };

    render(){
        if (this.props.lat && this.props.lon) {
            this.props.getAllCuisineTypes(this.props.lat, this.props.lon);
        }
        let Background = this.props.background[0];
        return(
            <div className='home'>
                <div 
                    className='home-img'
                    style={{backgroundImage: `url(${Background})`}}
                ></div>
                <SearchBar history={this.props.history}/>
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
        results: state.restaurant.results,
        photos: state.restaurant.photos,
        background: state.restaurant.background
    };
};

export default connect(msp,{
    getAllCuisineTypes,
    setLat,
    setLon,
    getPhotos,
    getBackground,
    clear
})(Home);