function crearSala(game_name, is_started, is_full) {
    const requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      //body: JSON.stringify({game_name, is_started, is_full}),
    }
    return fetch(`http://localhost:8000/creationgame?game_name=${game_name}&is_started=${is_started}&is_full=${is_full}`, requestOptions);
}

function listmatch(){
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}

export const servicioPartida = {crearSala, listmatch}