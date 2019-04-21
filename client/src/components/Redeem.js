import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Redeem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'PARTIAL',
    };
  }
  render() {
    return (
      <RadioGroup
        value={this.state.value}
        onChange={event => this.setState({ value: event.target.value })}>
        <FormControlLabel value="PARTIAL" control={<Radio />} label="Parcial" />
        <FormControlLabel value="FULL" control={<Radio />} label="Completo" />
      </RadioGroup>
    );
  }
}

Redeem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Redeem;
