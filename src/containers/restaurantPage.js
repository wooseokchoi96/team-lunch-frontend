import React from 'react';
import {connect} from 'react-redux';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

function restaurantPage (props) {

    const handleOnDragStart = (e) => e.preventDefault();

    return (
        <div className='RestaurantPage'>
            {/* <Carousel infiniteLoop={true} className='Carousel' >
                {props.photos.map((photo, index) => {
                    return (
                        <div key={index}>
                            <img src={photo} alt=''/>
                        </div>
                    );
                })}
            </Carousel> */}
            <AliceCarousel mouseTrackingEnabled className='Carousel'>
                {props.photos.map((photo, index) => {
                    return (
                        <img key={index} 
                            alt=''
                            src={photo} 
                            onDragStart={handleOnDragStart} 
                            className="CarImg" 
                        />  
                    );
                })}
            </AliceCarousel>
            <h1>Random Message</h1>
        </div>
    );
    
};

function msp (state) {
    return {
        photos: state.restaurant.photos,
        activeRestaurant: state.restaurant.activeRestaurant
    };
};

export default connect(msp)(restaurantPage);