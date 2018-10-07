import React, { Component } from 'react';
import VenueItem from './VenueItem';

class ListOfVenues extends Component {
    render() {
        return(
            <ol className="listOfVenues">
                {this.props.venues && 
                    this.props.venues.map((venue, indx) => (
                        <VenueItem key={indx} {...venue} handleItemAction={this.props.handleItemAction}/>
                ))}
            </ol>
        );
    }
}

export default ListOfVenues;