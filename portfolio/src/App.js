import React from 'react';
import './App.css';
import About from './about/About'
import Nav from './nav/Nav'
import Skills from './skills/Skills'

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
    </div>
  );
}

export default App;
