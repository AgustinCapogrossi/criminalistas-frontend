import React, { useState, useRef } from 'react';
import { PartidasList } from './componentes/PartidaList';
import CrearPartida from './CrearPartida';
import {servicioPartida} from './servicios/ServicioPartida'


function MostrarPartida() {
  //Lista de partidas
  const [partidas, setPartidas] = useState([{id: 1, title: "partida 1"},]);

  //Añadir Nuevas partidas  -- Lista[] o Lista[0..n]
  const handlePartidasRefresh = () => {
    setPartidas([servicioPartida.listmatch()]);
  };

  return (
    <div className="MostrarPartida">
      <header className="MostrarPartida-header">
        <div>
          <section>
            <CrearPartida />
            <p>Partidas abiertas</p>
            <PartidasList partidas={partidas} />
            <button onClick={handlePartidasRefresh}>Actualizar partidas</button>
          </section>
        </div>
      </header>
    </div>
  );
}

export default MostrarPartida;