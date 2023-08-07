import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Home } from "./Routes/Home";
import { Skills } from "./Routes/Skills";
import { Projects } from "./Routes/Projects";
import { Contact } from "./Routes/Contact";



function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    
  );
}



export default App;

