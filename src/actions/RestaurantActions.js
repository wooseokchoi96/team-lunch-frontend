import {API_KEY} from '../config';
const API_URL = 'https://developers.zomato.com/api/v2.1';

function getAllCuisineTypes (lat, lon) {
    return function (dispatch) {
        fetch(`${API_URL}/cuisines?lat=${lat}&lon=${lon}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'user-key': API_KEY
            }
        })
        .then(resp => resp.json())
        .then(cuisines => {
            dispatch({type: 'GET ALL CUISINE TYPES', payload: cuisines})
        })
    };
};

function searching (searchTerm) {
    return {type: 'SEARCHING',  payload: searchTerm};
};

function search (cuisine, start, lat, lon, sort, order) {
    return function (dispatch) {
        fetch(`${API_URL}/search?q=${cuisine}&start=${start}&lat=${lat}&lon=${lon}&sort=${sort}&order=${order}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'user-key': API_KEY
            }
        })
        .then(resp => resp.json())
        .then(results => {
            dispatch({type: 'SEARCH', payload: results})
        })
    };
};

function clear () {
    return {type: 'CLEAR'};
};

function setLat (lat) {
    return {type: 'SET LAT', payload: lat};
};

function setLon (lon) {
    return {type: 'SET LON', payload: lon};
};

function setSort (sort) {
    return {type: 'SET SORT', payload: sort};
};

function setOrder (order) {
    return {type: 'SET ORDER', payload: order};
};

export {
    getAllCuisineTypes,
    searching,
    search,
    clear,
    setLat,
    setLon,
    setSort,
    setOrder
};