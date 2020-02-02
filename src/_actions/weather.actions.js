import { weatherServices }  from '../_services';
import { FETCH_WEATHER_START, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../_constants';

export const weatherActions = {
    fetchWeather
};

function fetchWeather(){

    return dispatch => weatherServices.fetchWeather()

        .then(res => {

            dispatch({ type: FETCH_WEATHER_START });

            if (res.status === 200) {
                
                dispatch({ type: FETCH_WEATHER_SUCCESS, data: res.data });
                return res.data;

            } else {

                dispatch({ type: FETCH_WEATHER_ERROR, data: res.body });
                throw res.body;

            }
        })
}
