import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {getAllBreeds} from './actions'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './App.css';
import Breeds from './Components/Breeds.js';
import Favorites from './Components/Favorites.js';


function App({dispatch}) {
  return (
      <Router>
        <div className="App">
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button>All breeds</Button>
            </Link>
            <Link to="/favorites" style={{ textDecoration: 'none' }}>
              <Button>My favorites</Button>
            </Link>
          </ButtonGroup>
          
          <Route exact path="/" component={Breeds} onEnter={ dispatch(getAllBreeds()) }/>
          <Route path="/favorites" component={Favorites}/>
        </div>
      </Router>
  );
}

export default connect()(App)