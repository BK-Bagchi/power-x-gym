import React from 'react'
import Home from '../Home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Classses from '../Classes/Classses';
import Pricing from '../Pricing/Pricing';

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/classes'>
                    <Classses />
                </Route>
                <Route exact path='/pricing'>
                    <Pricing />
                </Route>
            </Switch>
        </Router>
    );
};

export default Main;