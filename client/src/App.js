import { Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import Faq from './components/Faq';
import Redemption from './components/Redemption';
import Users from './components/Users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  renderUsersList() {
    if (this.state.user) return;
    return (
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper>
            <Users onClickRedemption={user => this.setState({ user })} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
  renderRedemption() {
    if (!this.state.user) return;
    return (
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Faq />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Redemption user={this.state.user} />
        </Grid>
      </Grid>
    );
  }
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
        {this.renderUsersList()}
        {this.renderRedemption()}
      </div>
    );
  }
}

export default App;
