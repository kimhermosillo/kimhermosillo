import React, { Component } from 'react';
import '../App.css';
import whiteLogo from './whiteLogo.png'
import Grid from '@material-ui/core/Grid';

class Header extends Component {
    render() {
        return(
            <Grid item xs ={12}>
            <img src={whiteLogo} className='whiteLogo' />
            </Grid>
            // <h1>mine</h1>
        )
    }
}

export default Header