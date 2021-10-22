import React from 'react';

export function PartidaItem({partida}) {
    const {id, nombre} = partida;

    return (
        <li>{nombre}</li>
    )
}
