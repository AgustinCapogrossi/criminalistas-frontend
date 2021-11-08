import React, {useState} from "react";
import Dado from "./dados";
import "./RollDice.css";
import {servicioTurno} from './servicios/ServicioTurno';

const RollDice = ({sides}) => {

    const [state, setState] = useState({
        dice: "one",
        rolling: false,
        score: 0
    });

    const {dice, rolling, score} =  state;

    const roll = () => {
        const newDice = servicioTurno.DiceNumber("Todes", "Pepi");
                        //sides[Math.floor(Math.random() * sides.length)];
        const newScore = Object.values(newDice);
        setState({
            dice: newDice,
            rolling: true,
            score: newScore
        });

        setTimeout(() => {
            setState((prevState) => ({...prevState, rolling: false}));
        }, 1000);

    };
    
    const handleEndTurn = () => {
        servicioTurno.EndTurn('Todes', 'Pepi');
    };

    return ( 
        <>
            <div className="roll-dice">
                <div className= "rolldice-container">
                    <Dado face={String(dice)} rolling={rolling}/>
                </div>
                <button onClick={roll} disabled={rolling}>Tirar dado</button>
                <button onClick={handleEndTurn}>Terminar turno</button> 
                <h2>Mover {score} casilleros</h2> 
            </div> 
        
        </>
    );
};

RollDice.defaultProps = {
    sides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {six: 6}
    ],
};

export default RollDice;
