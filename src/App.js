import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CustomersPage from './pages/CustomersPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Menu from './pages/Menu/Menu';
import RegisterClient from './pages/RegisterClient';
import RegisterCollab from './pages/RegisterCollab';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/CustomersPage" element={<CustomersPage/>} exact />
        <Route path="/About" element={<About/>} exact />
        <Route path="/Contact" element={<Contact/>} exact />
        <Route path="/Login" element={<Login/>} exact />
        <Route path="/Menu" element={<Menu/>} exact />
        <Route path="RegisterClient/" element={<RegisterClient/>} exact />
        <Route path="RegisterCollab/" element={<RegisterCollab/>} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

