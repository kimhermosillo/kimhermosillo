
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//THESE ARE VITAL ^^  vv COMPONENTS
import Footer from './Footer';


class Body extends Component {
    render() {
        return (
            <p>

                ANYWHERE BUT HERE
<Footer />
                {/* FOOTER IS ADDED ON THIS COMPONENT SO IT IS ONLY SHOWN IN THE MAIN PAGE
AFTER THAT A NEW COMPONENT WILL APPEAR WITH THE LOGO ON THE LEFT BOTTOM SIDE */}

            </p>
        )
    }
}

export default Body