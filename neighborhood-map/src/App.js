import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import FourAPI from './API/';

class App extends Component {
  componentDidMount() {
    FourAPI.search({
      near: "Austin, TX",
      query: "tacos",
      limit: 10 
    }).then(results => console.log(results));
  }
  render() {
    return (
      <div className="App">
        <div role="application" aria-hidden="true" id="map">
          <Map />
        </div>
      </div>
    )
  }
}

export default App;

/* 
* Special thanks to Ryan Waite for his assitance with this project (https://www.youtube.com/watch?v=LvQe7xrUh7I&t=3837s&index=6&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s - Accessed October 5th, 2018; 
* https://github.com/ryanwaite28/udacity-fend-p7 - Accessed October 5th, 2018) as well as special thanks to Forrest Walker for his assitance with this project (https://www.youtube.com/playlist?list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP - Accessed October 5th, 2018).
*/
