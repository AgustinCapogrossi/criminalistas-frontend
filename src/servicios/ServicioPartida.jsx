function crearSala(game_name, is_started, is_full) {
    const requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({game_name, num_players, is_started, is_full}),
    }
    return fetch(`http://localhost:8000/creationgame?game_name=${game_name}&is_started=${is_started}&is_full=${is_full}`, requestOptions);
}



export default crearSala;