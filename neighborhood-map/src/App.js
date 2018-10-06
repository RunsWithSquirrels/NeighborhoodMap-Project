import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';

class App extends Component {
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


// Google Maps Key: AIzaSyC2cqf79ch5dp8cXoXHyYSvFptiaVH7Tps
// Foursquare Key: ZNYVFTLSQ042C0FQVC01CTUBDI3XGXFYS4EXMHTAYJWWRBDX (client ID)
// Foursquare Key: QWD10FMGI3FU05FG5GMG5ONI0AJTTR24TP5VZDKSKPGAMXCV (client secret)