import { Button, Grid, Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CONTRIBUTE } from '../core/constants';
import contribute from '../services/contribute';
import '../styles/Contribute.css';

class Contribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: CONTRIBUTE.TYPE.NORMAL,
      value: 0,
    };
  }
  setContribute() {
    return contribute.setContribute(this.props.user.recordId, this.state)
      .then(() => this.props.onClose());
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={12} className='align-center'>
          <ToggleButtonGroup exclusive value={this.state.type} className='contribute-switch'
            onChange={(_, type) => this.setState({ type })}>
            <ToggleButton value={CONTRIBUTE.TYPE.NORMAL}>
              Contribuição Normal
            </ToggleButton>
            <ToggleButton value={CONTRIBUTE.TYPE.ADDITIONAL}>
              Contribuição Adicional
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <Typography>Valor</Typography>
          <Typography>{this.state.value}</Typography>
          <Slider value={this.state.value} max={20000} step={1}
            onChange={(_, value) => this.setState({ value })} />
        </Grid>

        <Grid item xs={1}>
          <Button color="primary" onClick={() => this.props.onClose()}>
            Cancelar
          </Button>
        </Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={1}>
          <Button color="primary" onClick={() => this.setContribute()} disabled={!this.state.value > 0}>
            Salvar
          </Button>
        </Grid>
      </Grid>
    );
  }
}


Contribute.propTypes = {
  user: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Contribute;
