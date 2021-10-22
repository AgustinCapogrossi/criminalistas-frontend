import React from 'react';
import ServicioPartida from './servicios/ServicioPartida';

const initialState = {match:[]}

export default (state = initialState, action) => {
  switch (action.type) {
    case "LISTMATCH":
      return { ...state, matches: action.match };
    default:
      return state;
  }
}
