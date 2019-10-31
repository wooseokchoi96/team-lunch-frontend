const defaultState = {
    name: '',
    username: '',
    password: '',
    showPass: false
};

function authReducer (state = defaultState, action) {
    switch (action.type) {
        case 'CHANGE NAME':
            return {...state, name: action.payload} ;
        case 'CHANGE USERNAME':
            return {...state, username: action.payload} ;
        case 'CHANGE PASSWORD':
            return {...state, password: action.payload} ;
        default:
            return state;
    }
};

export default authReducer;