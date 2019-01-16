
import React, { Component } from 'react';
import Work from './Work'
import About from './About'
import Body from './Body'
import Travel from './Travel'
import Spain from './Spain'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function BasicExample() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link> | <Link to='/Work'>Work</Link> | <Link to="/About">About</Link>  | <Link to="/Travel">Travel</Link>
                <hr /> 
                <Route exact path="/" component={Home} />
                <Route path='/Work' component={Work} /> 
                <Route path="/About" component={About} />
                <Route path="/Travel" component={Travel} />
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <Body />
        </div>
    );
}


export default BasicExample;
