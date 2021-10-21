import React, { useState } from 'react';
import './App.css';

function App() {
  const [nickname, setNickname] = useState([]);

  const handleNickname = event => {
    setNickname(event.target.value);
  };

  const sendNicknameToBase = nick => {
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nick),
    }).then(response => response.json());
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <section>
            <form>
              <p>Apodo</p>
              <input
                type="text"
                placeholder="Tu Apodo"
                onChange={handleNickname}
                maxLength="20"
              />
              <a
                onSubmit={sendNicknameToBase(nickname)}
                href="../partidas.html"
              >
                Jugar
              </a>
            </form>
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;
