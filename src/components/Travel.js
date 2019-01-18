import React, { Component } from 'react';
import Spain from './Spain'
import Sweden from './Sweden'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Travel() {
  return (
  <div>
    <HashRouter basename='/travel'/>
    <Link to="travel/Spain">Spain</Link> | 
      <Route path='travel/Spain' component={Spain} /> 
      
    <Link to='travel/Sweden'> Sweden</Link>
<Route path ='travel/Sweden' component={Sweden} />
        
    </div>
 
    
  );
}

    


export default Travel;









