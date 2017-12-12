import React from 'react'


class GoogleMap extends React.Component{

	componentDidMount(){
		//create a embedded google map
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.latlng.lat,
				lng: this.props.latlng.lon
			}
		})
	}


	render(){
		// ref allows us to get a direct reference to an html element
		// that has been rendered to the page
		//we can get a reference to this div using this.refs.map
		return <div className= 'map' ref='map' />
	}
}

export default GoogleMap