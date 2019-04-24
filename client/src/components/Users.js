import { DialogContent, DialogTitle, Fab, Snackbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';
import React, { Component } from 'react';
import Faq from '../components/Faq';
import Redeem from '../components/Redeem';
import { REDEEM } from '../core/constants';
import date from '../services/date';
import user from '../services/user';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      user: null,
      refresh: false,
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList() {
    user.getUsers().then(users => this.setState({ users, user: null, refresh: true }));
  }
  canRedeem(status, createdAt) {
    const isAnApprovedStatus = REDEEM.APPROVED_STATUS.find(approvedStatus => approvedStatus === status);
    const months = date.monthDiff(new Date(), new Date(createdAt));
    return isAnApprovedStatus && months >= REDEEM.MINIMUM_MONTH_TO_REDEEM;
  }
  render() {
    return (
      <div>
        {this.renderRedeem()}
        {this.renderRefreshSnack()}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Name</TableCell>
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
        <Fab color="primary" className='float-button'>
          <AddIcon />
        </Fab>
      </div>
    );
  }
  renderRefreshSnack() {
    return (
      <Snackbar
        open={this.state.refresh}
        autoHideDuration={1000}
        onClose={() => this.setState({ refresh: false })}
        message={<span>Lista atualizada</span>}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'middle',
        }}
      />
    );
  }
  renderUser() {
    if (!this.state.users) return;
    return this.state.users.map((user, key) =>
      <TableRow key={key}>
        <TableCell align='center'>{user.fieldData.name}</TableCell>
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
    if (!this.state.user) return;
    return (
      <Dialog open={!!this.state.user} maxWidth='lg'>
        <DialogTitle id="customized-dialog-title">
          Resgate de previdencia usuário: {this.state.user.fieldData.name}
        </DialogTitle>
        <DialogContent>
          <Faq />
          <Redeem user={this.state.user} onClose={() => this.refreshList()} />
        </DialogContent>
      </Dialog>
    );
  }
}

export default Users;