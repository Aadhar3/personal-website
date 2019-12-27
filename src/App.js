import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
