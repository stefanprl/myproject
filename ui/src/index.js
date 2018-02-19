import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Layout from './Components/Layout/layout.js';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router><Layout /></Router>
    

   



, document.getElementById('root'));
registerServiceWorker();
