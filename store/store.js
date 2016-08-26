import { createStore } from 'redux';
// import RootReducer from '../reducers/root_reducer';
// import masterMiddleware from '../middleware/master_middleware';
import pokemonReducer from '../reducers/pokemon_reducer';
import { applyMiddleware } from 'redux';

import pokemonMiddleware from '../middleware/pokemon_middleware';



const configureStore = (preloadedState = {pokemon: {}}) => (
  createStore(
    pokemonReducer,
    {},
    applyMiddleware(pokemonMiddleware)
  )
);

export default configureStore;
