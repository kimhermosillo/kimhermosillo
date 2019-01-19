import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Barcelona from './cities/Barcelona';
import Madrid from './cities/Madrid';

class Spain extends Component {
    render() {
    return (
<div>
    <p>
        A beautiful country. Choose between Barcelona or Madrid to view my adventures.

        <Router>
            <div className='spain'>
                <Link to="/barcelona">Barcelona</Link> | <Link to='/madrid'>Madrid</Link> 
                <hr /> 
                <Route exact path="/barcelona" component={Barcelona} />
                <Route path='/madrid' component={Madrid} /> 
                
            </div>
        </Router>


    </p>
</div>
        )
    }
}

export default Spain

