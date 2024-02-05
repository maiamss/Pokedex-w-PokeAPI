// requisição http via javascript
// fetch API
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 8;
let offset = 0;


// function convertPokemonTypesToLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => {
//         return ` <li class="type">${typeSlot.type.name}</li> `
//     })
// };


function convertPokemonToLi(pokemon) {
return `

<li class="pokemon ${pokemon.type}">
    <span class="number">
    ${pokemon.number}
    </span>

    <span class="name">
    ${pokemon.name}
    </span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
    
        <img src="${pokemon.photo}" alt="${pokemon.name}">
    
    </div>
    </li>
`};

function loadPokemonsItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

        const newList = pokemons.map((pokemon) => {


            return convertPokemonToLi(pokemon);
        })
        const newHTML = newList.join('');

        pokemonList.innerHTML += newHTML;
    })
}

loadPokemonsItens(offset, limit);

 loadMoreButton.addEventListener('click', () =>{
    offset += limit;
    loadPokemonsItens(offset, limit);
 })


