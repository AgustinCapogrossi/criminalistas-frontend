import React, {useEffect, useState} from 'react';
import axios from 'axios';

async function createNickname(nickname){
  try {
      await axios.post(`http://127.0.0.1:8000/creationuser?user_to_create=${nickname}`);
  } catch (error){
      console.log(error);
  }
}

async function createLobby(game_name, game_creator, num_players, is_started, is_full) {
  try {
    await axios.post(`http://127.0.0.1:8000/creationgame?game_name=${game_name}&game_creator=${game_creator}&num_players=${num_players}&is_started=${is_started}&is_full=${is_full}`);
  } catch (error){
    console.log(error);
  }
}

function listmatch(){
  useEffect(() => {
    fetchPartidas()
  }, [])
  
  const [partidas, setPartidas] = useState([]);
  
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({game_name, host, num_players}),
  }
  
  const fetchPartidas = async () => {
    const response = await fetch('http://localhost:8000/show_available_games', requestOptions);
    const partidas = await response.json();
    console.log(partidas);
    setPartidas(partidas);
  }

  return partidas;
}

function listplayers(){
  useEffect(() => {
    fetchPlayers()
  }, [])
  
  const [players, setPlayers] = useState([]);
  
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({game_name, host, num_players}),
  }
  
  const fetchPlayers = async () => {
    const response = await fetch('http://localhost:8000/show_players', requestOptions);
    const players = await response.json();
    console.log(players);
    setPlayers(players);
  }

  return players;
}


export const servicioPartida = {createLobby, listmatch, listplayers, createNickname}