const pokemon= require('./pokemon');

const randomPokemon = () => {
    const randPoke = pokemon[Math.floor(Math.random()*pokemon.length)];
    const output = 
    `Pokemon No. ${randPoke.id} 
    - Name: ${randPoke.name.english} | ${randPoke.name.japanese}
    - Type: ${randPoke.type.toString()}`;
    console.log(output)
}


module.exports = { randomPokemon }