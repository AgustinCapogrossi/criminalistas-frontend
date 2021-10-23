import React from 'react';

export function PartidaItem({partida}) {
    const {title} = partida;

    return (
        <li>{title}</li>
    )
}
