import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import initalServiceWorker from './initalServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
initalServiceWorker();
