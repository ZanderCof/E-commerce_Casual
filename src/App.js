import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Register from './components/Register';
import Footer from './components/Footer';
import Store from './components/Store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Header/>} /> 
          <Route path="/registrati" element={<Register/>} /> 
          <Route path="/uomostore" element={<Store/>} />
        </Routes>
          <Footer/>
        
    </div>
  </Router>
  );
}

export default App;
