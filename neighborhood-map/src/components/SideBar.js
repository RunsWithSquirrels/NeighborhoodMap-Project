import React, { Component } from 'react';
import ListOfVenues from './ListOfVenues';

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            venues: []
        };
    }
    handleSearchFilter = () => {
        if (this.state.query.trim() !== '') {
            const venues = this.props.venues.filter(venue => venue.name
                .toLowerCase().includes(this.state.query.toLowerCase()));
                return venues;
        }
        return this.props.venues;
    };
    handleInputChange = event => {
        this.setState({ query: event.target.value });
        const markers = this.props.venues.map(venue => {
            const matchInfo = venue.name.toLowerCase().includes(event.target.value.toLowerCase());
            const marker = this.props.markers.find(marker => marker.id === venue.id);
            if (matchInfo) {
                marker.isSeen = true;
            } else {
                marker.isSeen = false;
            }
            return marker;
        });
        this.props.updateSuperState({ markers });
    };
    render() {
        return(
            <div className="sideBar">
                <div className="header"><h2>Neighborhood Map</h2></div>
                <input type="search" id="search" placeholder="Filter Venue List" onChange={this.handleInputChange}/>
                <ListOfVenues {...this.props} venues = {this.handleSearchFilter()}
                    handleItemAction={this.props.handleItemAction}/>
            </div>
        );
    }
}

export default SideBar;