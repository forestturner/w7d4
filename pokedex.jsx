import React from "react";
import ReactDOM from 'react-dom';
import API from './util/api_util';
import {RECEIVE_ALL_POKEMON, receiveAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import { createStore, applyMiddleware } from 'redux';
import Root from './components/root';
import pokemonMiddleware from './middleware/pokemon_middleware';

const OverallMiddleware = applyMiddleware(pokemonMiddleware);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(window.pokemonTypes);
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});





// API.fetchAllPokemon((pokemon) => store.dispatch(receiveAllPokemon(pokemon)));
