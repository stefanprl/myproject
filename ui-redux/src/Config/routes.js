import React from 'react';
import Home from '../Pages/home.js';
import EditUser from '../Pages/editUser.js';
import About from '../Pages/about.js';
import App from '../App.js';
import {Switch, Route } from 'react-router-dom';
import LandingPage from "../Pages/landing-page";


const Routes = () => (
    <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='*' component={LandingPage()} />
    </Switch>
);

export default Routes;