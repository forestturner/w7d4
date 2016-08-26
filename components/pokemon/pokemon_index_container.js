import {connect} from 'react-redux';
import {receiveAllPokemon, requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';


const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const mapDispatchToProps = dispatch => ({
  receiveAllPokemon: (pokemon) => dispatch(receiveAllPokemon(pokemon)),
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
