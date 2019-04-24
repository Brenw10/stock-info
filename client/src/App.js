import { Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Stock Demo
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Paper>
              <Users />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
