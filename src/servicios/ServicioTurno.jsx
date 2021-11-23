import React from 'react';
import axios from 'axios';

async function DiceNumber(player_name, game_name) {
    try {
        await axios.post(`http://127.0.0.1:8000/player/${game_name}/${player_name}/dice_number`);
    } catch (error) {
        console.log(error);
    }
}

async function EndTurn(player_name, game_name) {
    try {
        await axios.post(`http://127.0.0.1:8000/${game_name}/${player_name}/end_turn`);
    } catch (error) {
        console.log(error);
    } 
}

async function Suspicion(player_who_suspects, game_name, monster_card, victim_card, room_card) {
    try {
        await axios.post(`http://127.0.0.1:8000/cards/suspicion/${game_name}/${player_who_suspects}?monster_card=${monster_card}&victim_card=${victim_card}&room_card=${room_card}`);
    } catch (error) {
        console.log(error);
    } 
}

async function Accusation(player_who_accuse, monster_card, victim_card, room_card) {
    try {
        await axios.post(`http://127.0.0.1:8000/cards/accusation?player_who_accuse=${player_who_accuse}&monster_card=${monster_card}&victim_card=${victim_card}&room_card=${room_card}`);
    } catch (error) {
        console.log(error);
    } 
}

export const servicioTurno = {DiceNumber, EndTurn, Envelope, DistributeCards, Suspicion, Accusation}

