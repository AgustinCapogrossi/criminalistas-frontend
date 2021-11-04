import React from 'react';
import './Board.css';

const vertical = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",
                    "15","16","17","18","19","20"];
const horizontal = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
                    "ñ","o","p","q","r","s"];

function Board () {
    let board = [];
    for (let i = 0; i < horizontal.length; i++) {
        for (let j = vertical.length - 1; j >= 0; j--) {
            const number = j + i + 2;

            if (number % 2 === 0){
                board.push(
                    <div className="tile black-tile">2</div>
                ) 
            }else {
                board.push(
                    <div className="tile white-tile">1</div>
                )
                
            }
        }
    } 
    return (
        <div className="board"> 
            {board} 
        </div>
    );
}

export default Board;
