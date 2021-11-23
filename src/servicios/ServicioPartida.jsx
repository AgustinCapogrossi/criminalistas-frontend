import React, {useEffect, useState} from 'react';
import axios from 'axios';
//import { w3cwebsocket as W3CWebSocket } from "websocket";

async function createNickname(nickname){
  try {
    await axios.post(`http://127.0.0.1:8000/user/creationuser?user_to_create=${nickname}`);

  } catch (error){
    console.log(error);
  }
}

async function createLobby(game_name, game_creator) {
  try {
    await axios.post(`http://127.0.0.1:8000/game/creationgame?game_name=${game_name}&game_creator=${game_creator}`); 
  } catch (error){
    console.log(error);
  }
}

async function joinGame(game_to_play, user_to_play) {
  
  try {
    await axios.post(`http://127.0.0.1:8000/game/joingame/${game_to_play}/${user_to_play}?game_to_play=${game_to_play}&user_to_play=${user_to_play}`);
  } catch (error){
    console.log(error);
  }
}

async function startGame(game_to_start, nickname) {
  try {
    //await axios.post(`http://127.0.0.1:8000/game/start_game?game_to_start=${game_to_start}`);

    const webSockeUser = new WebSocket(`ws://localhost:8000/ws/${game_to_start}/${nickname}`);

    webSockeUser.onopen = () => {
      console.log('Connected to the server!');
    }

  } catch (error){
    console.log(error);
  }
}

function listmatch(){

  useEffect(() => {
    const interval = setInterval(() => {
          fetchPartidas()
         }, 1000);
    return () => clearInterval(interval);
  }, [])


  const [partidas, setPartidas] = useState([]);
  
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({game_name, host, num_players}),
  }
  
  const fetchPartidas = async () => {
    const response = await fetch('http://127.0.0.1:8000/game/show_available_games', requestOptions);
    const partidas = await response.json();
    console.log(partidas);
    setPartidas(partidas);
  }

  return partidas;
}

function listplayers(game_name){
  useEffect(() => {
    const interval = setInterval(() => {
          fetchPlayers()
         }, 1000);
    return () => clearInterval(interval);
  }, [])


  console.log(game_name);

  const [players, setPlayers] = useState([]);
  
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({game_name, host, num_players}),
  }
  
  const fetchPlayers = async () => {
    const response = await fetch(`http://127.0.0.1:8000/player/show_players?game_name=${game_name}`, requestOptions);
    const players = await response.json();
    console.log(players);
    setPlayers(players);
  }

  return players;
}

async function deleteFromLobby(user_name) {
    try {
      await axios.delete(`http://127.0.0.1:8000/game/exitgame?player_to_exit=${user_name}`);
    } 
    catch (error){
      console.log(error);
    }
}


export const servicioPartida = {createLobby, listmatch, listplayers, createNickname, joinGame, startGame, deleteFromLobby};
