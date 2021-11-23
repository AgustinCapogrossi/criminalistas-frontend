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

async function Suspicion(player_who_suspects, monster_card, victim_card, room_card) {
    try {
        await axios.post(`http://127.0.0.1:8000/cards/suspicion?player_who_suspects=${player_who_suspects}&monster_card=${monster_card}&victim_card=${victim_card}&room_card=${room_card}`);
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

