import React, {Component} from 'react';
import {connect} from 'react-redux';

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
            this.allDots[i].className = this.allDots[i].className.replace(" active", "");
        }
        this.allSlides[this.slideIndex].style.display = "block";
        this.allDots[this.slideIndex].className += " active";
    };

    render() {
        return (
            <div className='RestaurantPage'>
                <div className="slideshow-container">
                    {this.props.photos.map((photo, index) => {
                        return (
                            <div key={index} ref={(ref) => this.allSlides[index] = ref} className="mySlides fade">
                                <div className="numbertext">{index + 1} / {this.props.photos.length}</div>
                                <img src={photo} alt='' style={{width:'100%'}} />
                            </div>
                        );
                    })}

                    <button className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</button> 
                    <button className="next" onClick={() => this.plusSlides(1)}>&#10095;</button>
                </div>

                <br />

                <div style={{textAlign:'center'}}>
                    {this.props.photos.map((photo, index) => {
                        return (
                            <span key={index} ref={(ref) => this.allDots[index] = ref} className="dot" onClick={() => this.currentSlide(index)}></span>
                        );
                    })}
                </div>
            </div>
        );
    }
    
};

function msp (state) {
    return {
        photos: state.restaurant.photos,
        activeRestaurant: state.restaurant.activeRestaurant
    };
};

export default connect(msp)(restaurantPage);