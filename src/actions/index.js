const API_KEY = `5066533bb11db40926f7e924bc33df5a`

export const FETCH_WEATHER = 'FETCH_WEATHER'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
import axios from 'axios'

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url)

	console.log('request', request)
	
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}