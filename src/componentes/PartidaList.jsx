import React from 'react';
import {PartidaItem} from './PartidaItem';

export function PartidasList({partidas}) {
    return (
        <ul>
            {partidas.map((partida) =>(
                <PartidaItem partida={partida} />
            ))}
        </ul>
    );
}
