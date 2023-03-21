const pokemonContainer = document.getElementById('pokemon-container');
const PokemonButton = document.getElementById('cargar-pokemon');

function cargarPokemonRandom() {
const pokemonId = Math.floor(Math.random() * 40) + 1;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const pokemonName = data.name;
      const pokemonHeight= data.height;
      const pokemonImage = data.sprites.front_default;

    const pokemonElement = document.getElementById('pokemon-container')
    pokemonElement.innerHTML = `
        <h2>El nombre es ${pokemonName}</h2>
        <h2>Mide ${pokemonHeight}</h2>
        <img src="${pokemonImage}">
      `;
    })
}

PokemonButton.addEventListener('click', cargarPokemonRandom);

