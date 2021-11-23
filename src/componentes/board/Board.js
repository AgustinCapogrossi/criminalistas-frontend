import { integerPropType } from '@mui/utils';
import { number, string } from 'prop-types';
import React, { useRef, useState } from 'react';
import Tile from '../tile/Tile';
import './Board.css';
//import useKey from "@rooks/use-key";
import { useKeys } from "rooks";
import { Box, Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const vertical = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",
                    "15","16","17","18","19","20"];
const horizontal = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
                    "ñ","o","p","q","r","s"];

//tablero del juego
export const mysteryBoard = (props) => {
    //Posicionar peones en el tablero
    const[pieceVerde, setPieceVerde] = useState({image:`imagenes/peon-verde.png`, x: 6, y: 19})
    const[pieceAzul, setPieceAzul] = useState({image:`imagenes/peon-azul.png`, x: 6, y: 0})
    const[pieceRojo, setPieceRojo] = useState({image:`imagenes/peon-rojo.png`, x: 13, y: 19})
    const[pieceCeleste, setPieceCeleste] = useState({image:`imagenes/peon-celeste.png`, x: 13, y: 0})
    const[pieceAmarillo, setPieceAmarillo] = useState({image:`imagenes/peon-amarillo.png`, x: 0, y: 6})
    const[pieceRosa, setPieceRosa] = useState({image:`imagenes/peon-rosa.png`, x: 19, y: 13})

    //movimiento de peones 
    const moveDown = () => {
        if(pieceVerde.image === `public/imagenes/peon-verde.png`){
            setPieceVerde({image:`public/imagenes/peon-verde.png`, x: pieceVerde.x, y: pieceVerde.y - 1})
        }
    }

    const moveUp = () => {
        if(pieceVerde.image === `public/imagenes/peon-verde.png`){
            setPieceVerde({image:`public/imagenes/peon-verde.png`, x: pieceVerde.x, y: pieceVerde.y + 1})
        }
    }

    const moveRight = () => {
        if(pieceVerde.image === `public/imagenes/peon-verde.png`){
            setPieceVerde({image:`public/imagenes/peon-verde.png`, x: pieceVerde.x + 1, y: pieceVerde.y})
        }
    }

    const moveLeft = () => {
        if(pieceVerde.image === `public/imagenes/peon-verde.png`){
            setPieceVerde({image:`public/imagenes/peon-verde.png`, x: pieceVerde.x - 1, y: pieceVerde.y})
        }
    }
    
    //Configurando teclas para mover fichas
    useKeys('s', moveDown)
    useKeys('w', moveUp)
    useKeys('d', moveRight)
    useKeys('a', moveLeft)

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
      <Router>
        <div>
            <div id="board">
                {board} 
            </div> 

            <Box sx={{ minWidth: 800, bgcolor: "#000000"}}>
                
                <Button 
                    type="submit"
                    variant="contained"
                    sx={{bgcolor: 'black' }}
                    size="large"
                >
                    Tirar dado
                </Button>
                  
                  
                <Button 
                    type="submit"
                    variant="contained"
                    sx={{bgcolor: 'black' }}
                    size="large"
                   
                >
                    Sospechar
                </Button>

                <Button 
                    type="submit"
                    variant="contained"
                    sx={{bgcolor: 'black' }}
                    size="large"
                    
                >
                    Acusar
                </Button>

                <Button 
                    type="submit"
                    variant="contained"
                    sx={{bgcolor: 'black' }}
                    size="large"
                    
                >
                    Terminar turno
                </Button>

                <Link to='/' style={{ textDecoration: 'none' }}>

                </Link>

            </Box>
    
        </div>
      </Router>
    );
}

