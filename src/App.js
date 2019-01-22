import React, { Component } from 'react';
import './App.css';
// components
import Header from './components/Header'
import Nav from './components/Nav'
import Body from './components/Body'
import Footer from './components/Footer'
//router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// materialize 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({

  paper: {

    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }
}

)

function CenteredGrid(props) {
  const { classes } = props


  return (
    <div >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid><Header /></Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid><Nav /></Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid className='bodyFooter'><Footer /></Grid>
        </Grid>
      </Grid>
    </div>
  )
}



export default withStyles(styles)(CenteredGrid)





class MoveButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click To Move
          </button>
    );
  }
}

class BoxOne extends React.Component {
  render() {
    return (
      <div className="boxOne-container">
        Box1
          </div>
    );
  }
}

class BoxTwo extends React.Component {
  render() {
    return (
      <div className="boxTwo-container">
        Box2
          </div>
    );
  }
}

