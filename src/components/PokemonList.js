import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = (props) => {
    console.log(props);
    let pokemonList = props.pokemonArray.map(pokemon => {
        return <PokemonCard alt={pokemon.name} id={pokemon.id} key={pokemon.id} name={pokemon.name} imageURL={pokemon.sprites['front_default']}/>
    });

    return (
        <div className = 'ui segment'>
            <div className = 'ui link cards'> 
                {pokemonList}
            </div>
           
        </div>
    );
}

export default PokemonList;