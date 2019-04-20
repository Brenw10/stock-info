import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Redemption extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props.user)}
      </div>
    );
  }
}

Redemption.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Redemption;
