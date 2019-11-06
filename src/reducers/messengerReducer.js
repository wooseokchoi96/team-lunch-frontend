const defaultState = {
    conversations: [],
    activeConversation: null
};

function messengerReducer (state = defaultState, action) {
    switch (action.type) {
        case 'GET ALL CONVOS':
            return {...state, conversations: action.payload}
        case 'SET ACTIVE CONVO':
            return {...state, activeConversation: action.payload}
        default:
            return state;
    }
};

export default messengerReducer;