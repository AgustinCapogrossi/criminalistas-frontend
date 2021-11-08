import React from 'react';
import axios from 'axios';

async function DiceNumber(player_name, game_name) {
    try {
        await axios.post(`http://127.0.0.1:8000/player/dice_number?player_name=${player_name}&game_name=${game_name}`);
    } catch (error) {
        console.log(error);
    }
}

async function EndTurn(player_name, game_name) {
    try {
        await axios.post(`http://127.0.0.1:8000/player/end_turn?player_name=${player_name}&game_name=${game_name}`);
    } catch (error) {
        console.log(error);
    } 
}

async function Envelope(game_name) {
    try {
        await axios.post(`http://127.0.0.1:8000/cards/envelope?game_name=${game_name}`);
    } catch (error) {
        console.log(error);
    }  
}

async function DistributeCards(a_game) {
    try {
        await axios.post(`http://127.0.0.1:8000/cards/distribute_cards?a_game=${game_name}`);
    } catch (error) {
        console.log(error);
    } 
}


export const servicioTurno = {DiceNumber, EndTurn, Envelope, DistributeCards}
