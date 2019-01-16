
import React, { Component } from 'react';
import Work from './Work'
import About from './About'
import Body from './Body'
import Travel from './Travel'
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


function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}

export default BasicExample;
