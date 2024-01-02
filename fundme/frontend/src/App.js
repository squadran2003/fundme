import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Nav from './nav.js';
import Login from './pages/login.js';
import Home from './pages/home.js';

function App() {
  return (
   <Container fluid>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
       </Routes>
   </Container>
  );
}

export default App;
