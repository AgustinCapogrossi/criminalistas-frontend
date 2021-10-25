import React, {useEffect, useState} from 'react';

function crearSala(game_name, num_players, is_started, is_full) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({game_name, num_players, is_started, is_full}),
  }
  return fetch(`http://localhost:8000/creationgame/`, requestOptions)
  .then(response => {response.json();
                      return response;
                    })
}

function listmatch(){
  useEffect(() => {
    fetchPartidas()
  }, [])
  
  const [partidas, setPartidas] = useState([]);
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({game_name, host, num_players}),
  }
  
  const fetchPartidas = async () => {
    const response = await fetch('http://localhost:8000/creationgame/?game_name="hola"&num_players=3&is_full=false&is_started=false', requestOptions);
    const partidas = await response.json();
    console.log(partidas);
    setPartidas(partidas);
  }

  return partidas;
}


export const servicioPartida = {crearSala, listmatch}