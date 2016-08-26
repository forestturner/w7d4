import {RECEIVE_ALL_POKEMON, receiveAllPokemon} from '../actions/pokemon_actions';
import _ from 'lodash';

const pokemonReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
    // let newPokemons = {};
      // action.pokemon.forEach((pokemon) => {
      //   newPokemons[pokemon.id] = pokemon;
      // });
      console.log(action.pokemon);
      let newState = _.merge({}, oldState, {pokemon: action.pokemon});
      // console.log();
      return newState;
    default:
      return oldState;
  }
};

export default pokemonReducer;
