import { integerPropType } from '@mui/utils';
import { number, string } from 'prop-types';
import React, { useState } from 'react';
import Tile from '../tile/Tile';
import './Board.css';

const vertical = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",
                    "15","16","17","18","19","20"];
const horizontal = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
                    "ñ","o","p","q","r","s"];

const pieces = [];

for(let p = 0; p < 6; p++){
    var type = "";
    var y = 0;
    var x = 0;
    if(p === 0){
        type = "azul";
        y = 0;
        x = 6;
    }else if(p === 1){
        type = "verde";
        y = 19;
        x = 6;
    }else if(p === 2){
        type = "rojo";
        y = 19;
        x = 13;
    }else if(p === 3){
        type = "celeste";
        y = 0;
        x = 13;
    }else if(p === 4){
        type = "amarillo";
        y = 6;
        x = 0;
    }else if (p === 5){
        type = "rosa";
        y = 13;
        x = 19;
    }

    pieces.push({image:`imagenes/peon-${type}.png`, x, y})
}

function Board () {
    let board = [];
    for (let j = vertical.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontal.length; i++) {

            let image = undefined;

            pieces.forEach((peon) => {
                if(peon.x === i && peon.y === j){
                    image = peon.image;
                }
            });

            board.push(<Tile key={`${j},${i}`} j={j} i={i} image={image}/>);

        }
    }

    return (
        <div id="board">
            {board} 
        </div> 
    );
}

export default Board;
