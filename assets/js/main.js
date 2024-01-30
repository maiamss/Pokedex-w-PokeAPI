// requisição http via javascript
// fetch API
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


fetch(url)//fetch retorna uma promisse
.then((response) =>  response.json()) //encadeamento de then's
.then((jsonBody) => console.log(jsonBody))  //o que vai p segundo then é o retorno do primeiro
.catch((error) => console.log(error))





