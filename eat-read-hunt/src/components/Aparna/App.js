import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react'
import '../../styles/Aparna/App.css';
import Navbar from '../Aparna/Navbar';
// import Books from './components/Books.js';
import Books from '../Aparna/Books';
import Savebooks from '../Aparna/Savebooks';
import Search from '../Aparna/Search';

import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/Books" component={Books} />
            <Route path="/Savebooks" component={Savebooks} />
            <Route path="/Search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;