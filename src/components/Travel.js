import React, { Component } from 'react';
import Spain from './Spain'
import Sweden from './Sweden'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Travel() {
  return (
    <Router>
      <div>
      <Link to="/Spain">Spain</Link>
      <Route path='/Spain' component={Spain} /> 
    

        
      </div>
    </Router>
  );
}

    


export default Travel;









