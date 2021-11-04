import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/style';


function Card({type}) {
    let url = "";

    switch(type == "recinto") {
        case "Alcoba":
            url = "imagenes/cartas/alcoba.png"
            break;
        case "Biblioteca":
            url = "imagenes/cartas/biblioteca.png"
            break;
        case "Bodega":
            url = "imagenes/cartas/bodega.png"
            break;
        case "Cochera":
            url = "imagenes/cartas/cochera.png"
            break;
        case "Laboratorio":
            url = "imagenes/cartas/laboratorio.png"
            break;
        case "Panteon":
            url = "imagenes/cartas/panteon.png"
            break;
        case "Vestibulo":
            url = "imagenes/cartas/vestibulo.png"
            break;
        default:
            url = "imagenes/cartas/misterio.png"
            break;
    }

    switch(type == "victima") {
        case "Ama de llaves":
            url = "imagenes/cartas/ama_de_llaves.png"
            break;
        case "Conde":
            url = "imagenes/cartas/conde.png"
            break;
        case "Condesa":
            url = "imagenes/cartas/condesa.png"
            break;
        case "Doncella":
            url = "imagenes/cartas/doncella.png"
            break;
        case "Jardinero":
            url = "imagenes/cartas/jardinero.png"
            break;
        case "Mayordomo":
            url = "imagenes/cartas/mayordomo.png"
            break;
        default:
            url = "imagenes/cartas/misterio.png" 
            break;
    }

    switch(type == "mounstro") {
        case "Dracula":
            url = "imagenes/cartas/dracula.png"
            break;
        case "Fantasma":
            url = "imagenes/cartas/fantasma.png"
            break;
        case "Frankenstein":
            url = "imagenes/cartas/frankenstein.png"
            break;
        case "Hombre lobo":
            url = "imagenes/cartas/hombre_lobo.png"
            break;
        case "Jekyll Hyde":
            url = "imagenes/cartas/jekyll_hyde.png"
            break;
        case "Momia":
            url = "imagenes/cartas/momia.png"
            break;
        default:
            url = "imagenes/cartas/misterio.png"
            break;
    }

    return <img src={url} style= {style}/> 
}

Card.propType = {
    type: PropTypes.string.isRequired
}

export default Card;