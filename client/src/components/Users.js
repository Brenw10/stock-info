import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { Component } from 'react';
import user from '../services/user';
import '../styles/users.css';
import Button from '@material-ui/core/Button';

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
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Parcelas</TableCell>
            <TableCell align='center'>Saldo portabilidade</TableCell>
            <TableCell align='center'>Saldo valores adicionais</TableCell>
            <TableCell align='center'>Saldo contribuições normais</TableCell>
            <TableCell align='center'>Status</TableCell>
            <TableCell align='center'>Data da associação</TableCell>
            <TableCell align='center'>Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.renderUser()}
        </TableBody>
      </Table>
    );
  }
  renderUser() {
    if (!this.state.users) return;
    return this.state.users.map((user, key) =>
      <TableRow key={key}>
        <TableCell align='center'>{user.fieldData.name}</TableCell>
        <TableCell align='center'>{user.fieldData.split}</TableCell>
        <TableCell align='center'>{user.fieldData.portabilityValue}</TableCell>
        <TableCell align='center'>{user.fieldData.additionalValue}</TableCell>
        <TableCell align='center'>{user.fieldData.value}</TableCell>
        <TableCell align='center'>{user.fieldData.status}</TableCell>
        <TableCell align='center'>{user.fieldData.createdAt}</TableCell>
        <TableCell align='center'>
          <Button>Resgate</Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default Users;