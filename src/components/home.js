import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import UsersTable from './usersTable';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <div>
        <Link to="/users">
          <Button variant="contained" color="primary">
            Create User
          </Button>
        </Link>
      </div>
      <UsersTable />
    </Container>
  );
};

export default Home;
