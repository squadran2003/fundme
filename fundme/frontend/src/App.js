import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Nav from './nav.js';
import Login from './login.js';

function App() {
  return (
   <Container fluid>
      <Nav />
      <Login />
   </Container>
  );
}

export default App;
