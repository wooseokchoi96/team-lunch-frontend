import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';

class restaurantPage extends Component {

    constructor(){
        super();
        this.allSlides = [];
        this.allDots = [];
        this.slideIndex = 0;
    }

    componentDidMount(){
        this.showSlide(this.slideIndex);
    }

    plusSlides = n => {
        this.showSlide(this.slideIndex += n);
    };

    currentSlide = n => {
        this.showSlide(this.slideIndex = n);
    };

    showSlide = n => {
        if (n > this.allSlides.length - 1) {this.slideIndex = 0}
        if (n < 0) {this.slideIndex = this.allSlides.length - 1}
        for (let i = 0; i < this.allSlides.length; i++) {
            this.allSlides[i].style.display = "none";
        }
        for (let i = 0; i < this.allDots.length; i++) {
            this.allDots[i].className = this.allDots[i].className.replace(" active1", "");
        }
        this.allSlides[this.slideIndex].style.display = "block";
        this.allDots[this.slideIndex].className += " active1";
    };

    render() {
        const res = this.props.activeRestaurant;
        const times = res.timings.split(',');
        return (
            <div className='RestaurantPage'>
                <div className='Carousel'>
                    <div className="slideshow-container">
                        {this.props.photos.map((photo, index) => {
                            return (
                                <div key={index} ref={(ref) => this.allSlides[index] = ref} className="mySlides fade">
                                    <div className="numbertext">{index + 1} / {this.props.photos.length}</div>
                                    <img className='CarImg' src={photo} alt='' />
                                </div>
                            );
                        })}

                        <button className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</button> 
                        <button className="next" onClick={() => this.plusSlides(1)}>&#10095;</button>
                    </div>

                    <br />

                    <div className='Carousel-Dots' >
                        {this.props.photos.map((photo, index) => {
                            return (
                                <span key={index} ref={(ref) => this.allDots[index] = ref} className="dot" onClick={() => this.currentSlide(index)}></span>
                            );
                        })}
                    </div>
                </div>

                <Paper className='RestaurantDetails'>
                    <h1>{res.name}</h1>
                    <h5>Rating: {res.user_rating.aggregate_rating === 0 ?
                        res.user_rating.rating_text :
                        res.user_rating.aggregate_rating}</h5>
                    <h5>Price: {res.currency}</h5>  
                    <h5>Type: {res.cuisines}</h5>  
                    <h5>&#9742; {res.phone_numbers}</h5>
                    <h5>
                        Location: {res.location.address} <br />
                        ({res.location.locality}, {res.location.city})
                    </h5>
                    <h5> Hours: 
                        {res.timings !== '' ?
                            <ul style={{listStyleType:'none'}}>
                                {times.map((time, index) => {
                                    return <li key={index} >{time}</li>
                                })}
                            </ul>
                        : ' Not available'
                        }
                    </h5>
                </Paper>
            </div>
        );
    }
    
};

function msp (state) {
    return {
        photos: state.restaurant.photos,
        activeRestaurant: state.restaurant.activeRestaurant.restaurant
    };
};

export default connect(msp)(restaurantPage);