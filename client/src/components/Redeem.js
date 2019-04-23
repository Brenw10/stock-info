import { Typography, Button, Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Slider from '@material-ui/lab/Slider';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { REDEEM } from '../core/constants';
import redeem from '../services/redeem';

class Redeem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: REDEEM.TYPE.PARTIAL,
      portabilityValue: 0,
      additionalValue: 0,
      value: 0,
    };
  }
  canSendRedeem() {
    const { portabilityValue, additionalValue, value } = this.state;
    const values = portabilityValue + additionalValue + value;
    return values > 0;
  }
  sendRedeem() {
    return redeem.setRedeem(this.props.user.recordId, this.state)
      .then(() => this.props.onClose());
  }
  setAllFullValue() {
    this.setState({
      portabilityValue: this.props.user.fieldData.portabilityValue,
      additionalValue: this.props.user.fieldData.additionalValue,
      value: this.props.user.fieldData.value,
    });
  }
  setAllNoneValue() {
    this.setState({
      portabilityValue: 0,
      additionalValue: 0,
      value: 0,
    });
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <RadioGroup
            value={this.state.type}
            onChange={event => this.setState({ type: event.target.value })}>
            <FormControlLabel value={REDEEM.TYPE.PARTIAL} onClick={() => this.setAllNoneValue()} control={<Radio />} label="Parcial" />
            <FormControlLabel value={REDEEM.TYPE.FULL} onClick={() => this.setAllFullValue()} control={<Radio />} label="Completo" />
          </RadioGroup>
        </Grid>

        <Grid item xs={12}>
          <Typography>Valor Resgate Portabilidade</Typography>
          <Typography>{this.state.portabilityValue}</Typography>
          <Slider disabled={this.state.type === REDEEM.TYPE.FULL}
            value={this.state.portabilityValue} max={this.props.user.fieldData.portabilityValue} step={1}
            onChange={(_, portabilityValue) => this.setState({ portabilityValue })} />
        </Grid>

        <Grid item xs={12}>
          <Typography>Valor Resgate Adicional</Typography>
          <Typography>{this.state.additionalValue}</Typography>
          <Slider disabled={this.state.type === REDEEM.TYPE.FULL}
            value={this.state.additionalValue} max={this.props.user.fieldData.additionalValue} step={1}
            onChange={(_, additionalValue) => this.setState({ additionalValue })} />
        </Grid>

        <Grid item xs={12}>
          <Typography>Valor Resgate Contribuição Normal</Typography>
          <Typography>{this.state.value}</Typography>
          <Slider disabled={this.state.type === REDEEM.TYPE.FULL}
            value={this.state.value} max={this.props.user.fieldData.value * 0.2} step={1}
            onChange={(_, value) => this.setState({ value })} />
        </Grid>

        <Grid item xs={1}>
          <Button color="primary" onClick={() => this.props.onClose()}>
            Cancelar
          </Button>
        </Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={1}>
          <Button color="primary" onClick={() => this.sendRedeem()} disabled={!this.canSendRedeem()}>
            Salvar
          </Button>
        </Grid>
      </Grid>
    );
  }
}

Redeem.propTypes = {
  user: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Redeem;
