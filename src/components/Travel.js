import React, { Component } from 'react';
import Spain from './Spain'
import Sweden from './Sweden'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Barcelona from './cities/Barcelona';
import Madrid from './cities/Madrid';

////////////////////////////////////////////////////////////
// first our route components

function vistSpain({ routes }) {
  return (
    <div>
      <h2>Spain</h2>
      
        
          <Link  to="/spain/barcelona">barcelona</Link>
        
        
          <Link to="/spain/madrd">madrid</Link>
        
      

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

function visitBarcelona() {
  return <h3>Barcelona</h3>;
}

function visitMadrid() {
  return <h3>Madrid</h3>;
}

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: "/sweden",
    component: Sweden
  },
  {
    path: "/spain",
    component: Spain,
    routes: [
      {
        path: "/spain/barcelona",
        component: Barcelona
      },
      {
        path: "/spain/madrid",
        component: Madrid
      }
    ]
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function RouteConfig() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/spain">Spain</Link>
          </li>
          <li>
            <Link to="/sweden">Sweden</Link>
          </li>
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default RouteConfig