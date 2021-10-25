import React from 'react';
import './HomePage/App.css';
import './HomePage/Home.css';
import './HomePage/partidasList.css';
import Home from './HomePage/home';
import MostrarPartidas from './partidasList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/partidas" component={MostrarPartidas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
