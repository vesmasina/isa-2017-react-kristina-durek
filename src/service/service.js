export function getPokemons(appState) {
    return fetch('https://pokedex.byinfinum.co/api/v1/pokemons', {
    method: 'GET',
    headers: {
        Authorization: appState.getAuthData()
    }
    }).then((res) => res.json(), (err) => console.log(err));
}

/* export function getPokemon(appState, id) {
    return fetch(`https://pokedex.byinfinum.co/api/v1/pokemons/${id}`, {
    method: 'GET',
    headers: {
        Authorization: appState.getAuthData()
    }
    }).then((res) => res.json(), (err) => console.log(err));
} */

export function login(userData) {
    return fetch('https://pokedex.byinfinum.co/api/v1/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: {
        type: 'session',
        attributes: {
            email: userData.username,
            password: userData.password
        }
        }
    })
    }).then((res) => res.json(), (err) => console.log(err));
}
