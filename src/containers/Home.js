import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllCuisineTypes, setLat, setLon} from '../actions/RestaurantActions';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import ResultCard from '../components/ResultsCard';

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
            <div className='home'>
                <div className='home-img'></div>
                <SearchBar />
                <SearchResults />
                {/* <div 
                    class="widget_wrap" 
                    style={{width:'320px',
                            height:'797px',
                            display:'inline-block'}}
                >
                    <iframe 
                            title='Restaurant Collections'
                            src="https://www.zomato.com/widgets/all_collections.php?city_id=280&theme=gray&widgetType=small" 
                            style={{position:'relative',
                                    width:'100%',
                                    height:'100%'}} 
                            border="0" 
                            frameborder="0"
                    >
                    </iframe>
                </div> */}
                {this.props.results.restaurants ? 
                this.showResults()
                : null}
            </div>
        );
    }

    showResults = () => {
        console.log('printing the result cards')
        return this.props.results.restaurants.map(restObj => {
                    return <ResultCard 
                        key={restObj.restaurant.id}
                        name={restObj.restaurant.name}
                        img={restObj.restaurant.featured_img}
                    />
                })
    };

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
        results: state.restaurant.results
    };
};

export default connect(msp,{
    getAllCuisineTypes,
    setLat,
    setLon
})(Home);