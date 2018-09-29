import React, { Component } from 'react';
// import { Router, Route } from 'react-router'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

// import Head from './components/head'
import About from './components/about'
import Home from './components/home'


// class App2 extends Component {
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
        
//       </div>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/home">Inbox</Link></li>
          </ul>
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
          </div>
       
        
        </Router>
      </div>
    );
  }
}

export default App;
