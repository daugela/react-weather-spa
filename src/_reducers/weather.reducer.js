import {
    FETCH_WEATHER_START,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_ERROR,
    FAVOURITE_CITY_ADD,
    FAVOURITE_CITY_REMOVE
} from '../_constants';

const initialState = {
    loading: true,
    error: null,
    cities_cached: [],
    cities_recent: []
};

function weatherReducer(state=initialState, action) {
    switch (action.type) {

        case FETCH_WEATHER_START:
            return {
                ...state,
                loading: true // Just pass some loader status (might be useful in UI)
            };

        case FETCH_WEATHER_SUCCESS:
            localStorage.setItem('WEATHER_CACHE', JSON.stringify(action.data));
            return {
                ...state,
                loading: false,
                directory: action.data // Add weather to redux state
            };

        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        
        case FAVOURITE_CITY_ADD:
            if(state.tabs > parseInt(process.env.REACT_APP_MAX_CITIES)){
                return {
                    ...state,
                    tabs: parseInt(process.env.REACT_APP_MAX_CITIES)
                };

            }else{
                return {
                    ...state,
                    tabs: state.tabs + 1
                };
            }

        case FAVOURITE_CITY_REMOVE:
            if(state.tabs < 1){
                return {
                    ...state,
                    tabs: 0
                };
            }else{
                return {
                    ...state,
                    tabs: state.tabs - 1 
                };
            }

        default:
            return state;
  }
}

export default weatherReducer;
