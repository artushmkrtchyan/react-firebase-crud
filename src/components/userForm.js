import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Input, Button, FormGroup, makeStyles, CircularProgress } from '@material-ui/core';
import { createUser, getUser, updateUser } from '../redux/users/action';
import { getUsersStore } from '../redux/users/selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const UserForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const history = useHistory();
  const { user, loadingUser } = useSelector(getUsersStore);
  const initialBody = { firstName: '', lastName: '', email: '' };
  const [body, setBody] = useState(initialBody);

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, []);

  useEffect(() => {
    if (userId && user.id) {
      setBody(user);
    }
  }, [user.id]);

  const handleChange = ({ target }) => {
    setBody((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (body.id) {
      const data = { ...body };
      delete data.id;
      dispatch(updateUser(body.id, data));
      history.push('/');
    } else {
      dispatch(createUser(body));
      setBody(initialBody);
    }
  };

  if (loadingUser) {
    return <CircularProgress />;
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          required
          name="firstName"
          value={body.firstName}
          onChange={handleChange}
          placeholder="First Name"
          inputProps={{ 'aria-label': 'First Name' }}
        />
      </FormGroup>
      <FormGroup>
        <Input
          required
          name="lastName"
          value={body.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          inputProps={{ 'aria-label': 'Last Name' }}
        />
      </FormGroup>
      <FormGroup>
        <Input
          required
          type="email"
          name="email"
          value={body.email}
          onChange={handleChange}
          placeholder="Email"
          inputProps={{ 'aria-label': 'email' }}
        />
      </FormGroup>
      <FormGroup>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};

export default UserForm;
