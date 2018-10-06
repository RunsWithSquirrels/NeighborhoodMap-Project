import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

/* 
* Special thanks to Ryan Waite for his assitance with this project (https://www.youtube.com/watch?v=LvQe7xrUh7I&t=3837s&index=6&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s - Accessed October 5th, 2018; 
* https://github.com/ryanwaite28/udacity-fend-p7 - Accessed October 5th, 2018) as well as special thanks to Forrest Walker for his assitance with this project (https://www.youtube.com/playlist?list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP - Accessed October 5th, 2018).
*/
