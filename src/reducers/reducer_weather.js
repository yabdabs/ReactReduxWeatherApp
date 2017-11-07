import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
	console.log('Action received', action)

	switch(action.type){
		case FETCH_WEATHER:
			//we can't mutate the state, we must return a brand new state
			//since we want to add to the array, concat adds to the array and returns a 
			//brand new state array
			// return state.concat([action.payload.data])

			// es6 syntax
			//this is the same thing as above essentially. It is saying to create a new array, and return
			//action.state.payload in it. The ...state is saying take everything from the state array 
			//and add it to the new array
			//thus, a new version of state is created. Will return [city,city,city]. NOT [city, [city,city]]
			//note that new record is being iserted at top/front of the array
			return [action.payload.data, ...state]

		default:
    	return state;
	}
}