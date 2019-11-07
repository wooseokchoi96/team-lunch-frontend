const defaultState = {
    conversations: [],
    activeConversation: null,
    newMessageText: '',
    newConvoName: ''
};

function messengerReducer (state = defaultState, action) {
    switch (action.type) {
        case 'GET ALL CONVOS':
            return {...state, conversations: action.payload}
        case 'SET ACTIVE CONVO':
            return {...state, activeConversation: action.payload}
        case 'ADD CONVO':
            return {...state, conversations: [...state.conversations, action.payload]};
        case 'ADD MESSAGE':
            return {...state, conversations: action.payload};
        case 'WRITE CONVO':
            return {...state, newConvoName: action.payload};
        case 'WRITE MESSAGE':
            return {...state, newMessageText: action.payload};
        case 'CLEAR FORMS':
            return {...state, newMessageText: '', newConvoName: ''};
        default:
            return state;
    }
};

export default messengerReducer;