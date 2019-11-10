import {

    FETCHING_AMIIBO,
    FETCHING_AMIIBO_SUCCESS,
    FETCHING_AMIIBO_FAILURE

} from '../action'



const initialState = {
    data: [],
    gettingData: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case FETCHING_AMIIBO:
            return { ...state, gettingData: true }

        case FETCHING_AMIIBO_SUCCESS:
            return { ...state, data: action.payload, gettingData: false }

        case FETCHING_AMIIBO_FAILURE: 
            return { ...state, gettingData: true, error: action.payload }

        default:
            return state
    }
}

export default reducer;