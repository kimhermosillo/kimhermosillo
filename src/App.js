import React, { Component } from 'react';
import './App.css';
// components
import Header from './components/Header'
import Nav from './components/Nav'
import Body from './components/Body'
import Footer from './components/Footer'
//router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function hello () {
  return (
    <div>
      <Welcome name='Kim' />
      <Welcome name='Ciaran' />
      <Welcome name='Angie' />
    </div>
  )
}

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

hello()



export default App;
