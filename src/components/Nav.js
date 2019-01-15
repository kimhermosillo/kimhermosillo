
import React, { Component } from 'react';
import Work from './Work'
import About from './About'
import Travel from './Travel'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Nav extends Component {
    render() {
    return (
<p><Link to ='/Work'>Work</Link> | about | travel</p>
        )
    }
}

export default Nav