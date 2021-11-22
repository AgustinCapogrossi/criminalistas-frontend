import { integerPropType } from '@mui/utils';
import { number, string } from 'prop-types';
import React, { useRef, useState } from 'react';
import Tile from '../tile/Tile';
import './Board.css';
import useKey from "@rooks/use-key";
import { servicioTurno } from '../../servicios/ServicioTurno';

const vertical = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",
                    "15","16","17","18","19","20"];
const horizontal = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
                    "ñ","o","p","q","r","s"];

//tablero del juego
function mysteryBoard () {

    //Posicionar peones en el tablero
    const[pieceVerde, setPieceVerde] = useState({image:`imagenes/peon-verde.png`, x: 6, y: 19})
    const[pieceAzul, setPieceAzul] = useState({image:`imagenes/peon-azul.png`, x: 6, y: 0})
    const[pieceRojo, setPieceRojo] = useState({image:`imagenes/peon-rojo.png`, x: 13, y: 19})
    const[pieceCeleste, setPieceCeleste] = useState({image:`imagenes/peon-celeste.png`, x: 13, y: 0})
    const[pieceAmarillo, setPieceAmarillo] = useState({image:`imagenes/peon-amarillo.png`, x: 0, y: 6})
    const[pieceRosa, setPieceRosa] = useState({image:`imagenes/peon-rosa.png`, x: 19, y: 13})

    const nextPlayer = servicioTurno.nextPlayer('juani')

    console.log(nextPlayer[0])

    //movimiento de peones 
    const moveDown = () => {
        if(pieceVerde.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceVerde({image:`imagenes/peon-verde.png`, x: pieceVerde.x, y: pieceVerde.y - 1})
        }else if(pieceAzul.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceAzul({image:`imagenes/peon-azul.png`, x: pieceAzul.x, y: pieceAzul.y - 1})
        }else if(pieceRojo.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceRojo({image:`imagenes/peon-rojo.png`, x: pieceRojo.x, y: pieceRojo.y - 1})
        }else if(pieceCeleste.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceCeleste({image:`imagenes/peon-celeste.png`, x: pieceCeleste.x, y: pieceCeleste.y - 1})
        }else if(pieceAmarillo.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceAmarillo({image:`imagenes/peon-amarillo.png`, x: pieceAmarillo.x, y: pieceAmarillo.y - 1})
        }else if(pieceRosa.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceRosa({image:`imagenes/peon-rosa.png`, x: pieceRosa.x, y: pieceRosa.y - 1})
        }
    }

    const moveUp = () => {
        if(pieceVerde.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceVerde({image:`imagenes/peon-verde.png`, x: pieceVerde.x, y: pieceVerde.y + 1})
        }else if(pieceAzul.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceAzul({image:`imagenes/peon-azul.png`, x: pieceAzul.x, y: pieceAzul.y + 1})
        }else if(pieceRojo.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceRojo({image:`imagenes/peon-rojo.png`, x: pieceRojo.x, y: pieceRojo.y + 1})
        }else if(pieceCeleste.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceCeleste({image:`imagenes/peon-celeste.png`, x: pieceCeleste.x, y: pieceCeleste.y + 1})
        }else if(pieceAmarillo.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceAmarillo({image:`imagenes/peon-amarillo.png`, x: pieceAmarillo.x, y: pieceAmarillo.y + 1})
        }else if(pieceRosa.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceRosa({image:`imagenes/peon-rosa.png`, x: pieceRosa.x, y: pieceRosa.y + 1})
        }
    }

    const moveRight = () => {
        if(pieceVerde.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceVerde({image:`imagenes/peon-verde.png`, x: pieceVerde.x + 1, y: pieceVerde.y})
        }else if(pieceAzul.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceAzul({image:`imagenes/peon-azul.png`, x: pieceAzul.x + 1, y: pieceAzul.y})
        }else if(pieceRojo.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceRojo({image:`imagenes/peon-rojo.png`, x: pieceRojo.x + 1, y: pieceRojo.y})
        }else if(pieceCeleste.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceCeleste({image:`imagenes/peon-celeste.png`, x: pieceCeleste.x + 1, y: pieceCeleste.y})
        }else if(pieceAmarillo.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceAmarillo({image:`imagenes/peon-amarillo.png`, x: pieceAmarillo.x + 1, y: pieceAmarillo.y})
        }else if(pieceRosa.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceRosa({image:`imagenes/peon-rosa.png`, x: pieceRosa.x + 1, y: pieceRosa.y})
        }
    }

    const moveLeft = () => {
        if(pieceVerde.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceVerde({image:`imagenes/peon-verde.png`, x: pieceVerde.x - 1, y: pieceVerde.y})
        }else if(pieceAzul.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceAzul({image:`imagenes/peon-azul.png`, x: pieceAzul.x - 1, y: pieceAzul.y})
        }else if(pieceRojo.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceRojo({image:`imagenes/peon-rojo.png`, x: pieceRojo.x - 1, y: pieceRojo.y})
        }else if(pieceCeleste.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceCeleste({image:`imagenes/peon-celeste.png`, x: pieceCeleste.x - 1, y: pieceCeleste.y})
        }else if(pieceAmarillo.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceAmarillo({image:`imagenes/peon-amarillo.png`, x: pieceAmarillo.x - 1, y: pieceAmarillo.y})
        }else if(pieceRosa.image === `imagenes/peon-${nextPlayer[0]}.png`){
            setPieceRosa({image:`imagenes/peon-rosa.png`, x: pieceRosa.x - 1, y: pieceRosa.y})
        }
    }

    const handleDice = (event) => {
        event = 'hola'
        return event
    }

    const handleTurn = () => {
        servicioTurno.EndTurn('jael', 'partida1')
    }

    const diceNumber = servicioTurno.DiceNumber('juani', 'partida1')

    console.log(diceNumber)

    //Configurando teclas para mover fichas
    for (let i = 0; i < 6; i++) {
        if(i < 6){
            useKey('s', moveDown)
            useKey('w', moveUp)
            useKey('d', moveRight)
            useKey('a', moveLeft)
        }
    }

    let board = [];
    for (let j = vertical.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontal.length; i++) {

            let image = undefined;

           
            if(pieceVerde.x === i && pieceVerde.y === j){
                image = pieceVerde.image;
            }else if(pieceAzul.x === i && pieceAzul.y === j){
                image = pieceAzul.image;
            }else if(pieceRojo.x === i && pieceRojo.y === j){
                image = pieceRojo.image;
            }else if(pieceCeleste.x === i && pieceCeleste.y === j){
                image = pieceCeleste.image;
            }else if(pieceAmarillo.x === i && pieceAmarillo.y === j){
                image = pieceAmarillo.image;
            }else if(pieceRosa.x === i && pieceRosa.y === j){
                image = pieceRosa.image;
            }
            

            board.push(<Tile key={`${j},${i}`} j={j} i={i} image={image}/>);

        }
    }

    return (
        <>
            <div id="board">
                {board} 
            </div> 
            <div className="dice">
                <button onClick={handleDice}>Tirar dado</button>
                <h2>salio el numero {diceNumber} del dado</h2>
            </div>
            <div className="endTurn">
                <button onClick={handleTurn}>Terminar turno</button>
            </div>
        </>

        
    );
}

export default mysteryBoard;
