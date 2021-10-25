function crearSala(game_name, num_players, is_started, is_full) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({game_name, num_players, is_started, is_full}),
    }
    return fetch(`http://localhost:8000/creationgame/`, requestOptions)
    .then(response => {response.json();
                        return response;
                      })
}

function listmatch(){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({game_name, host, num_players}),
  }
  let address = fetch(`http://localhost:8000/creationgame/?game_name="hola"&num_players=3&is_full=false&is_started=false`, requestOptions)
      .then((response) => response.json())
      .then((user) => {
        return user;
      });

  return address;
}

export const servicioPartida = {listmatch, crearSala}
