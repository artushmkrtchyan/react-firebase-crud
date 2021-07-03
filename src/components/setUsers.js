import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import UserForm from './userForm';

export default function SetUser() {
  return (
    <Container maxWidth="lg">
      <div>
        <Link to="/">
          <Button variant="contained" color="primary">
            Home
          </Button>
        </Link>
      </div>
      <Container maxWidth="sm">
        <UserForm />
      </Container>
    </Container>
  );
}
