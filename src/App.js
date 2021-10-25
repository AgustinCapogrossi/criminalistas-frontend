import React from 'react';
import Home from './HomePage/home';
import Game_list from './Games_list';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/partidas" component={Game_list} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
