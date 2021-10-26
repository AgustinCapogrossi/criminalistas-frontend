import React from 'react';
import './HomePage/App.css';
import Home from './HomePage/home';
import Create_game from './Create_game';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lobby_game from './Lobby_game';

function App() {

    return(
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/partidas" component={Create_game}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
