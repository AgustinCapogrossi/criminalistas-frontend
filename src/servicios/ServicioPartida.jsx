import React, {useEffect, useState} from 'react';
import axios from 'axios';

async function createNickname(nickname){
  try {
      await axios.post(`http://127.0.0.1:8000/creationuser?user_to_create=${nickname}`);
  } catch (error){
      console.log(error);
  }
}

async function createLobby(game_name, game_creator) {
  try {
    await axios.post(`http://127.0.0.1:8000/creationgame?game_name=${game_name}&game_creator=${game_creator}`);
  } catch (error){
    console.log(error);
  }
}

async function joinGame(game_to_play, user_to_play) {
  try {
    await axios.post(`http://127.0.0.1:8000/joingame?game_to_play=${game_to_play}&user_to_play=${user_to_play}`);
  } catch (error){
    console.log(error);
  }
}

async function startGame(game_to_start) {
  try {
    await axios.post(`http://127.0.0.1:8000/start_game?game_to_start=${game_to_start}`);
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
    const response = await fetch('http://127.0.0.1:8000/show_available_games', requestOptions);
    const partidas = await response.json();
    console.log(partidas);
    setPartidas(partidas);
  }

  return partidas;
}

function listplayers(game_name){
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
    const response = await fetch(`http://127.0.0.1:8000/show_players?game_name=${game_name}`, requestOptions);
    const players = await response.json();
    console.log(players);
    setPlayers(players);
  }

  return players;
}


export const servicioPartida = {createLobby, listmatch, listplayers, createNickname, joinGame, startGame}