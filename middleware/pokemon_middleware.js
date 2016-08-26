import {REQUEST_ALL_POKEMON, receiveAllPokemon} from '../actions/pokemon_actions';
import API from '../util/api_util';

export default ({dispatch}) => next => action => {
  switch (action.type) {
    case REQUEST_ALL_POKEMON:

      API.fetchAllPokemon(
        (pokemon) => dispatch(receiveAllPokemon(pokemon)));
            
      next(action);

    default:
      next(action);
  }
};
