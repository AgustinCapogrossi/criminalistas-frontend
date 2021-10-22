import React, { useState } from 'react';
import './App.css';

function App() {
  const [nickname, setNickname] = useState('');

  const handleNickname = event => {
    setNickname(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <section>
            <form>
              <p>Apodo</p>
              <input type="text" placeholder="Tu Apodo" onChange={handleNickname}/>
            </form>
            <button>Jugar</button>
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;