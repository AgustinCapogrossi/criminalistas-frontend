import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <section>
            <form>
              <p>Apodo</p>
              <input type="text" name="nombre" placeholder="Tu Apodo" />
            </form>
            <button>Jugar</button>
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;
