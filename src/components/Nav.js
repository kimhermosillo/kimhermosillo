
import React, { Component } from 'react';
import Work from './Work'
import About from './About'
import Travel from './Travel'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Nav extends Component {
    render() {
    return (
        <Router>
<p><Link to ='/Work'>Work</Link> | <Link to ='/About'>About</Link> | <Link to ='/Travel'>Travel</Link>
        
    
       
        
        <Route path='/About' exact Component={About} />
     
   <Route path='/Travel' exact Component={Travel} />
   </p>

   </Router>
    )
        
    
    }
}

export default Nav