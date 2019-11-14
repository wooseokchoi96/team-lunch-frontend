import React from 'react';
import {connect} from 'react-redux';
import ResultCard from '../components/ResultsCard';



function allRestaurants (props) {

    if (props.results.restaurants) {
        return (
            <div>
            <h1 style={{textAlign:'center'}}>Results for {props.searchTerm} ...</h1>
            
            {props.results.restaurants.map(restObj => {
                        let rand = props.photos[Math.floor(Math.random() * props.photos.length)];
                        return <ResultCard 
                            history={props.history}
                            key={restObj.restaurant.id}
                            object={restObj}
                            name={restObj.restaurant.name}
                            img={rand}
                            rating={restObj.restaurant.user_rating.aggregate_rating === 0 ?
                                    restObj.restaurant.user_rating.rating_text :
                                    restObj.restaurant.user_rating.aggregate_rating}
                            price={restObj.restaurant.currency}
                            location={restObj.restaurant.location.address + ' (' + restObj.restaurant.location.locality + ')'}
                            phone={restObj.restaurant.phone_numbers}
                        />
                    })
            }
            </div>
        )
    } else {return null}
        

};

function msp (state) {
    return {
        searchTerm: state.restaurant.searchTerm,
        results: state.restaurant.results,
        photos: state.restaurant.photos
    };
};

export default connect(msp)(allRestaurants);