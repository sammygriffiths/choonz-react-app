import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/core/App';
import registerServiceWorker from './helpers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
