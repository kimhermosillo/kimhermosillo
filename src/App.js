import React, { Component } from 'react';
import './App.css';
// components
import Header from './components/Header'
import Nav from './components/Nav'
import Body from './components/Body'
import Footer from './components/Footer'
//router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
     <Header />
     <Nav />
     {/* <Body /> */}
     </div>



     </Router>
    )
  }
}

export default App;
