const pokeApi = {}
pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
        .then((response) => response.json())
}


pokeApi.getPokemons = (offset = 0, limit =20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
   
    return fetch(url)
        .then((response) =>  response.json()) //encadeamento de then's
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests)) //dps que todas as requisicoes termim=nares
        .then((pokemonsDetails)=> pokemonsDetails)
        }