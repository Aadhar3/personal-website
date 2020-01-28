import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';


import './App.css';

function App() {
  return (
    <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      {/* <Contact></Contact> */}
    </body>
  );
}

export default App;
