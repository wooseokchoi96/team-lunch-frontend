const defaultState = {
    cuisineTypes: [],
    searchTerm: '',
    results: [],
    lat: '',
    lon: '',
    sort: '',
    order: '',
    start: 0,
    photos: [],
    background: [],
    activeRestaurant: {}
};

function restaurantReducer (state = defaultState, action) {
    switch (action.type) {
        case 'SET LAT':
            return {...state, lat: action.payload};
        case 'SET LON':
            return {...state, lon: action.payload};
        case 'SET SORT':
            return {...state, sort: action.payload};
        case 'SET ORDER':
            return {...state, order: action.payload};
        case 'GET ALL CUISINE TYPES':
            return {...state, cuisineTypes: action.payload};
        case 'SEARCHING':
            return {...state, searchTerm: action.payload};
        case 'SEARCH':
            return {...state, results: action.payload};
        case 'CLEAR':
            return {...state, searchTerm: '', sort: '', order: ''};
        case 'GET PHOTOS':
            return {...state, photos: action.payload};
        case 'GET BACKGROUND':
            return {...state, background: action.payload};
        case 'SET RESTAURANT':
            return {...state, activeRestaurant: action.payload}
        default:
            return state;
    }
};

export default restaurantReducer;