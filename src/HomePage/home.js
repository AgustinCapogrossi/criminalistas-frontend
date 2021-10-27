import React, { useRef, useState } from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Create_game} from '../Create_game';
import { servicioPartida } from '../servicios/ServicioPartida';



let MIN_CHAR_NICKNAME = 2;

export const Home = (props) => {
  const [nickname, setNickname] = useState('');

  const nickNameHandle = event => {
    setNickname(event.target.value);
    stateButton(event.target.value);
  };

  const sendNicknameToBase = () => {
    servicioPartida.createNickname(nickname);
    props.history.push('/partidas');
  }

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
