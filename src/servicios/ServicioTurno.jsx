import React from 'react';
import axios from 'axios';

async function DiceNumber(player_name, game_name) {
    try {
        await axios.post(`http://127.0.0.1:8000/player/dice_number?player_name=${player_game}&game_name=${game_name}`);
    } catch (error) {
        console.log(error);
    }
}

async function EndTurn(player_name, game_name) {
    try {
        await axios.post(`http://127.0.0.1:8000/player/end turn?player_name=${player_game}&game_name=${game_name}`);
    } catch (error) {
        console.log(error);
    } 
}

export const servicioTurno = {DiceNumber, EndTurn}