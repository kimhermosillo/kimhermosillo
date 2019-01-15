import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Body from './components/Body'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
     <Header />
     <Nav />
     <Body />
     <Footer />
     </div>
    )
  }
}

export default App;
