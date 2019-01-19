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
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
})

function CenteredGrid(props) {
  const { classes } = props


return (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
      <Paper className={classes.paper}><Header /></Paper>
      </Grid>
      <Grid item xs={6}>
          <Paper className={classes.paper}><Nav /></Paper>
      </Grid>
      <Grid item xs={6}>
          <Paper className={classes.paper}><Body /></Paper>
      </Grid>
    </Grid>
  </div>
)
}

CenteredGrid.propTypes = { 
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CenteredGrid)


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Header />
//           <Nav />

//           {/* <Body /> */}
//         </div>



//       </Router>
//     )
//   }
// }




// export default App


