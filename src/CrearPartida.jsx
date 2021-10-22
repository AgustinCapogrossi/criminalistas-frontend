import React, { useState } from 'react';
import crearSala from './servicios/ServicioPartida'

function CrearPartida() {
    const [namePartida, setNamePartida] = useState('');
    //const [is_started, setStarted] = useState(false);
    //const [is_full, setFull] = useState(false);
  
    const partidaNameHandle = event => {
      setNamePartida(event.target.value);
    }

    //Crear nueva partida
    const handlePartidaAdd = () => {
      crearSala(namePartida, 1, false, false);
    };
  
    return (
      <div className="CrearPartida">
        <header className="CrearPartida-header">
          <div>
            <section>
              <input onChange={partidaNameHandle} type="text" placeholder="nombre de partida" />
              <button onClick={handlePartidaAdd}>Crear nueva partida</button>
            </section>
          </div>
        </header>
      </div>
    );
  }
  
export default CrearPartida;