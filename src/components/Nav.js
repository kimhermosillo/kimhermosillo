
import React, { Component } from 'react';
import Work from './Work'
import Home from './Body'
import About from './About'
import Body from './Body'
import Travel from './Travel'
import Spain from './Spain'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';



function BasicExample() {
    return (
        <Router>
            <div className='navLinks'>
               {/* <button onClick={this} className='navHome'><Link to="/">Home</Link> </button> */} <button className='navWork'><Link to='/Work'>Work</Link></button> | <button className='navAbout'><Link to="/About">About</Link></button>  | <button className='navTravel'><Link to="/Travel">Travel</Link></button> 
                <hr /> 
                <Route exact path="/" component={Home} />
                <Route path='/Work' component={Work} /> 
                <Route path="/About" component={About} />
                <Route path="/Travel" component={Travel} />
            </div>
        </Router>
    );
}

// function Home() {
//     return (
//         <div>
//             <Body />
//         </div>
//     );
// }


export default BasicExample;
