import React, { Component } from 'react'
import { connect } from 'react-redux'
import Charts from '../components/charts'

//get data into this component bc it is a container
//1. import the connect function from 'react-redux'
//2. Define function mapStateToProps
//3. Pull weather data into container

class WeatherList extends Component{
	renderWeather(cityData){
		const name = cityData.city.name

		//same as function(weather){}
		//map returns an array
		const temps = cityData.list.map(weather =>{
			return weather.main.temp
		})

		const pressures = cityData.list.map(weather=> {
			return weather.main.pressure
		})

		const humidities = cityData.list.map(weather=> {
			return weather.main.humidity
		})
		console.log(temps)

		return(
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Charts data={temps} color='red' units='K'/>
				</td>
				<td>
					<Charts data={pressures} color='green' units='hPa'/>
				</td>
				<td>
					<Charts data={humidities} color='blue' units='%'/>
				</td>
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
		// console.log('indide first line of render()',this.props.weather)
		return(
			<table className= 'table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>


				<tbody>
					{
						this.props.weather.map(this.renderWeather)
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