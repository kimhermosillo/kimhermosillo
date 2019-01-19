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
})

function CenteredGrid(props) {
  const { classes } = props


return (
  <div className={classes.root}>
    <Grid container spacing={8}>
      <Grid item xs={12}>
      <Paper><Header /></Paper>
      </Grid>
      <Grid item xs={12}>
          <Paper><Nav /></Paper>
      </Grid>
      <Grid item xs={12}>
          <Paper className='bodyFooter'><Footer /></Paper>
      </Grid>
    </Grid>
  </div>
)
}



export default withStyles(styles)(CenteredGrid)





