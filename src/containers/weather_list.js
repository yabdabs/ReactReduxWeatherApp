import React, { Component } from 'react'
import { connect } from 'react-redux'

//get data into this component bc it is a container
//1. import the connect function from 'react-redux'
//2. Define function mapStateToProps
//3. Pull weather data into container

class WeatherList extends Component{

	renderWeather(cityData){
		return(
			<tr>
				<td> {cityData.city.name} </td>
			</tr>
		)

	}	
	// renderWeather = (cityData) =>{
	// 	{console.log('inside of renderweather', 	cityData)}
	// 	return(
	// 		<tr>
	// 			<td> {cityData.city.name} </td>
	// 		</tr>
	// 	)
	// }

	render(){
		console.log(this.props.weather)
		return(
			<table className= 'table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>


				<tbody>
					{console.log(this.props)}
					{
						this.props.weather.map(function(x)
						{
							{this.renderWeather(x)}
						})
					}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({weather}){
		console.log('inside mapstatetoprops', weather)
	//putting {weather} in args instead of state is the same as 
	//const weather = state.weather
	//then we can assign weather: weather in return
	//which can be further reduced to just putting weather in return 
	return{
		weather
	}
}


//connect component to mapStateToProps
export default connect(mapStateToProps, null)(WeatherList)