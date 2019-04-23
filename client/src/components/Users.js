import { DialogContent, DialogTitle } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { Component } from 'react';
import Faq from '../components/Faq';
import Redeem from '../components/Redeem';
import { REDEEM } from '../core/constants';
import user from '../services/user';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      user: null,
    };
  }
  componentDidMount() {
    user.getUsers().then(users => this.setState({ users }));
  }
  canRedeem(status, createdAt) {
    const date = new Date();
    const createdDate = new Date(createdAt);
    const isAnApprovedStatus = REDEEM.APPROVED_STATUS.find(approvedStatus => approvedStatus === status);
    const months = (date.getFullYear() - createdDate.getFullYear()) * 12 + (date.getMonth() - createdDate.getMonth());
    return isAnApprovedStatus && months >= REDEEM.MINIMUM_MONTH_TO_REDEEM;
  }
  render() {
    return (
      <div>
        {this.state.user ? this.renderRedeem() : null}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Parcelas</TableCell>
              <TableCell align='center'>Saldo portabilidade</TableCell>
              <TableCell align='center'>Saldo valores adicionais</TableCell>
              <TableCell align='center'>Saldo contribuições normais</TableCell>
              <TableCell align='center'>Valor Total</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Data da associação</TableCell>
              <TableCell align='center'>Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderUser()}
          </TableBody>
        </Table>
      </div>
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
        <TableCell align='center'>{user.fieldData.portabilityValue + user.fieldData.additionalValue + user.fieldData.value}</TableCell>
        <TableCell align='center'>{user.fieldData.status}</TableCell>
        <TableCell align='center'>{user.fieldData.createdAt}</TableCell>
        <TableCell align='center'>
          <Button
            disabled={!this.canRedeem(user.fieldData.status, user.fieldData.createdAt)}
            onClick={() => this.setState({ user })}>
            Resgate
          </Button>
        </TableCell>
      </TableRow>
    );
  }
  renderRedeem() {
    return (
      <Dialog open={!!this.state.user} maxWidth='lg'>
        <DialogTitle id="customized-dialog-title">
          Resgate de previdencia usuário: {this.state.user.fieldData.name}
        </DialogTitle>
        <DialogContent>
          <Faq />
          <Redeem user={this.state.user} onCancel={() => this.setState({ user: null })} />
        </DialogContent>
      </Dialog>
    );
  }
}

export default Users;