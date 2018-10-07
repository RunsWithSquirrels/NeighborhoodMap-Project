import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import FourAPI from './API/';
import SideBar from './components/SideBar';
// import Nav from './components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 13,
      updateSuperState: object => {
        this.setState(object);
      }
    }
  }

  closeOpenMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpenInfo = false;
      return marker;
    })
    this.setState({ markers: Object.assign(this.state.markers, markers )});
  };

  handleMarkerAction = (marker) => {
    this.closeOpenMarkers();
    marker.isOpenInfo = true;
    this.setState({ markers: Object.assign(this.state.markers, marker )});
    const venue = this.state.venues.find(venue => venue.id === marker.id);
    FourAPI.getDetails(marker.id).then(resp => {
      const newVenueLocation = Object.assign(venue, resp.response.venue); 
      this.setState({ venues: Object.assign(this.state.venues, newVenueLocation) });
      console.log(newVenueLocation);
    });
  };

  handleItemAction = (venue) => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerAction(marker);
  };

  componentDidMount() {
    FourAPI.search({
      near: 'Austin, TX',
      query: 'tacos',
      limit: 10 
    }).then(results => {
      const { venues } = results.response;
      const { center} = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpenInfo: false,
          isSeen: true,
          id: venue.id
        }
      });
      this.setState({ venues, center, markers });
      console.log(results);
    });
  }

  render() {
    return (
      <div className="App">
        <SideBar {...this.state} handleItemAction={this.handleItemAction}/>
        <div className="Map" role="application" aria-hidden="true" id="map">
          <Map {...this.state} handleMarkerAction={this.handleMarkerAction}/>
        </div>
      </div>
    )
  }
}

export default App;

/* 
* Special thanks to Ryan Waite for his assitance with this project (https://www.youtube.com/watch?v=LvQe7xrUh7I&t=3837s&index=6&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s - Accessed October 5th, 2018; 
* https://github.com/ryanwaite28/udacity-fend-p7 - Accessed October 5th, 2018) as well as special thanks to Forrest Walker for his assitance with this project 
* (https://www.youtube.com/playlist?list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP - Accessed October 5th, 2018).
*/
