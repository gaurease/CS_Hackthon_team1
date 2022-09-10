import './App.css';
import React, { Component }  from 'react';
import Header from './Components/Header.js';
import { Container, Row, Col, Button } from 'reactstrap';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home.js';
import Menus from './Components/Menus.js';
import AllCustomers from './Components/AllCustomers';
import AddCustomer from './Components/AddCustomer';
import {BrowserRouter as Router, Route, Routes}  from "react-router-dom";
function App() {
  return (
  <Router>
    <ToastContainer/>
     <Container>
      <Header/>
      <Row className='p-5'>
        <Col md={3}>
          <Menus/>
        </Col>
        <Col md={9}>
          <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/add-customer' element={<AddCustomer/>} exact/>
          <Route path='/view-customers' element={<AllCustomers/>} exact/>
          </Routes>
        </Col>
      </Row>
     </Container>
  </Router>
  );
}

export default App;
