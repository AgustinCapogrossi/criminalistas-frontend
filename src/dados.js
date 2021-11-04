import React from "react";
import "./dados.css";

const Dado = ({face, rolling}) => {
    return <i className={`dado fas fa-dice-${face} ${rolling && "shaking"}` }/>;

}

export default Dado;