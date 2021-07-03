import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  CircularProgress,
  Table,
  TableBody,
  Icon,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
} from '@material-ui/core';
import { deleteUser, getUsers } from '../redux/users/action';
import { getUsersStore } from '../redux/users/selectors';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  wraper: {
    margin: '20px auto',
  },
  icon: {
    margin: '0 5px',
    cursor: 'pointer',
  },
  loading: {
    margin: '40px auto',
    textAlign: 'center',
  },
});

export default function UsersTable() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { users, loading } = useSelector(getUsersStore);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delete this user?')) {
      dispatch(deleteUser(id));
    }
  };

  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <TableContainer className={classes.wraper} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell align="right">
                <Link to={`/users/${item.id}`}>
                  <Icon className={classes.icon} color="primary">
                    edit
                  </Icon>
                </Link>
                <Icon
                  className={classes.icon}
                  color="secondary"
                  onClick={() => handleDelete(item.id)}
                >
                  delete
                </Icon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
