import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Nav from './nav.js';
import Login from './pages/login.js';
import Home from './pages/home.js';

function App() {
  let loggedIn = false;
  return (
   <Container fluid>
      <Nav />
        <Routes>
            <Route path="/" element={loggedIn?<Home/>:<Navigate to="/login"/>}/>
            <Route path="/login" element={<Login />} />
        </Routes>
   </Container>
  );
}

export default App;
