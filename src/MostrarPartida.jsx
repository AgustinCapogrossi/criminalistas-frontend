import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PartidasList } from './componentes/PartidaList';
import CrearPartida from './CrearPartida';

function MostrarPartida() {
  //Lista de partidas
  const [partidas, setPartidas] = useState([{id: 1, nombre: "partida 1"},]);

  const partidaRef = useRef();

  //Añadir Nuevas partidas  -- Lista[] o Lista[0..n]
  const handlePartidasAdd = () => {
    const partidaNew = partidaRef.current.value;
    if (partidaNew == '') return;

    setPartidas((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), nombre: partidaNew}];
    });

    partidaRef.current.value = null;
  };

  return (
    <div className="MostrarPartida">
      <header className="MostrarPartida-header">
        <div>
          <section>
            <CrearPartida />
            <p>Partidas abiertas</p>
            <PartidasList partidas={partidas} />
            <input ref={partidaRef} type="text" placeholder="nombre de partida" />
            <button onClick={handlePartidasAdd}>Crear partida</button>
          </section>
        </div>
      </header>
    </div>
  );
}

export default MostrarPartida;