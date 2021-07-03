import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default function NotFound() {
  return (
    <Container maxWidth="lg">
      <div>404</div>
      <Link to="/">← Back to Home</Link>
    </Container>
  );
}
