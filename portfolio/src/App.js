import React from 'react';
import './App.css';
import About from './about/About'
import Nav from './nav/Nav'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Switch>
        
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/projects'>
        <Projects />
        </Route>
        <Route path='/'>
          <About/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
