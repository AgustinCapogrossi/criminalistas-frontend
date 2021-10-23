import React, { useState } from 'react';
import './HomePage/App.css';

let MIN_CHAR_NICKNAME = 2;

function App() {
  const [nickname, setNickname] = useState('');


  const nickNameHandle = event => {
    setNickname(event.target.value);
    stateButton(event.target.value);
  }

  
  const sendNicknameToBase = () => {
    fetch(`http://localhost:8000/creationuser?user_to_create=${nickname}` ,{
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      // body: JSON.stringify({"user_to_create":nickname}),
    }).then(response => response.json);
  };

  //button config
  const [button, setButton] = useState(true);
  
  function stateButton(nick) {
    if(nick.length > MIN_CHAR_NICKNAME) {
      setButton(false);
    }
    else {
      setButton(true);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <section>
            <form action="../partidas.html">
              <p>Apodo</p>
              <input
                type="text"
                placeholder="Tu Apodo"
                onChange={nickNameHandle}
                maxLength="20"
              />
                <button 
                  disabled={button}
                  onClick={sendNicknameToBase}>
                      Jugar
                </button>
            </form>
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;