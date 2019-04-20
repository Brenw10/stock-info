import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';
import user from '../services/user';
import '../styles/users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }
  componentDidMount() {
    user.getUsers().then(users => this.setState({ users }));
  }
  render() {
    if (!this.state.users) return <div></div>;
    return this.state.users.map((user, key) =>
      <ExpansionPanel key={key}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{user.fieldData.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className='user-detail'>
          <Typography variant="overline">
            Status: {user.fieldData.status}
          </Typography>
          <Typography variant="overline">
            Saldo portabilidade: {user.fieldData.portabilityValue}
          </Typography>
          <Typography variant="overline">
            Saldo valores adicionais: {user.fieldData.additionalValue}
          </Typography>
          <Typography variant="overline">
            Saldo contribuições normais: {user.fieldData.value}
          </Typography>
          <Typography variant="overline">
            Parcelas: {user.fieldData.split}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel >
    );
  }
}

export default Users;
