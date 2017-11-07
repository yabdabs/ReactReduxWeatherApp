import React, { Component } from 'react'

//need this because we want action creator to fire off w.e form is submitted
//so we need to connect container to action creator/redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//we need this to call action creator when form is submitted
import { fetchWeather } from '../actions/index'

class SearchBar extends Component{
	constructor(props){
		super(props)

		this.state = {term: ''}

		//to bind onInputChnage to SearchBar class if not using fat arrow function
		// this.onInputChange = this.onInputChange.bind(this)
	}

	onInputChange = (event) => {
		this.setState({
			term: event.target.value
		})

		console.log(this.state.term)
	}

	onFormSubmit = (event) => {
		event.preventDefault()

		//we need to go and fetch the weather data
		this.props.fetchWeather(this.state.term)

		//once user submits form, we want to clear the search box
		this.setState({
			term: ""
		})
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit} className ='input-group'>
				<input 
					type='text' 
					placeholder = 'Get a five day forecast in your favorite cities'
					className= 'form-control'
					value = {this.state.term}
					onChange = {this.onInputChange}
				/>
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		)
	}
}


// hook action creator to SearchBar container
//anything returned from this function will end up as props on the SearchBar container
function mapDispatchToProps(dispatch){
	// fetchWeather returns an action. BindActionCreators with dispatch makes sure that action flows down to middleware and reducers
	//whenever fetchWeather is called, the result should be passed to all of our reducers
	// The dispatch method allows us to execute an action creator, perform logic, and ultimately update the global state object.
	return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)