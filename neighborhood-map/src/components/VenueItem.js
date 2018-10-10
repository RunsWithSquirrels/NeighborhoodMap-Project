import React, { Component } from 'react';

class VenueItem extends Component {
    render() {
        return(
            <li className="venueItem" onClick={() => this.props.handleItemAction(this.props)}>
                <img className="icon" src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix} 
                alt={this.props.categories[0].name}/>
                {this.props.name}
            </li>
        );
    }
}

export default VenueItem;