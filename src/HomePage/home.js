import React, { useRef, useState } from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Create_game from '../Create_game';

let MIN_CHAR_NICKNAME = 2;

function Home() {
  const [nickname, setNickname] = useState('');

  const nickNameHandle = event => {
    setNickname(event.target.value);
    stateButton(event.target.value);
  };

  const sendNicknameToBase = () => {
    fetch(`http://localhost:8000/creationuser?user_to_create=${nickname}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({"user_to_create":nickname}),
    }).then(response => response.json);
  };

  //  button config
  const [button, setButton] = useState(true);

  function stateButton(nick) {
    if (nick.length > MIN_CHAR_NICKNAME) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  return (

    <Router>
      <div className="Home">
        <header className="Home-header">
          <div>
            <section>
              <form>
                <p>Apodo</p>
                <input
                  type="text"
                  placeholder="Tu Apodo"
                  onChange={nickNameHandle}
                  maxLength="20"
                />
                <Link to="/partidas" style={{ textDecoration: 'none' }}>
                  <button disabled={button} onClick={sendNicknameToBase}>
                    Jugar
                  </button>
                </Link>
              </form>
            </section>
          </div>
        
        </header>
        <div>
          <Switch>
              <Route exact path="/partidas" component={Create_game} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;
