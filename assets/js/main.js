// requisição http via javascript
// fetch API
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => {
        return ` <li class="type">${typeSlot.type.name}</li> `
    })
};


function convertPokemonToLi(pokemon) {
return `

<li class="pokemon">
<span class="number">${pokemon.order}</span>
<span class="'name">${pokemon.name}</span>
<div class="detail">
    <ol class="types">
    ${convertPokemonTypesToLi(pokemon.types).join('')}
    </ol>
    <img src="${pokemon.sprites.other.dream_world.front_default}" 
    alt="${pokemon.name}">
    
    </div>
    </li>
`};

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi(pokemon)
    })
    const newHTML = newList.join('');
    pokemonList.innerHTML += newHTML;
})

// JEITO MAIS SIMPLES DE FAZER:

// const pokemonList = document.getElementById('pokemonList');
// pokeApi.getPokemons().then((pokemons = []) => {
//     pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
// })

 


