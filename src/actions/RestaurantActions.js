import {API_KEY} from '../config';
const API_URL = 'https://developers.zomato.com/api/v2.1';

function getAllCuisineTypes (lat, lon) {
    fetch(`${API_URL}/cuisines?lat=${lat}&lon=${lon}`,{
        method: 'GET',
        headers: {
            
        }
    })
};

export {
    getAllCuisineTypes
};