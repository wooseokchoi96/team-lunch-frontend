const defaultState = {
    cuisineTypes: [],
    searchTerm: '',
    results: [],
    lat: '',
    lon: '',
    sort: 'cost',
    order: 'asc',
    start: 0
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
            return {...state, searchTerm: ''};
        default:
            return state;
    }
};

export default restaurantReducer;