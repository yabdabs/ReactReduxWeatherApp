import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather.js'

console.log('indide index reducer', WeatherReducer)

const rootReducer = combineReducers({
  weather: WeatherReducer 
});

export default rootReducer;
