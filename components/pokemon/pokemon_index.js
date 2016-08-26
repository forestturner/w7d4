import React from 'react';


class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  componentsWillReceiveProps(newProps){
    this.props = newProps;
  }

  render (){
    debugger
    let List = [];
    if (this.props.pokemon) {
      List = this.props.pokemon.map( (pokemon) => (
        <li>{pokemon}</li>)
      );
    }

    return (
      <section className="pokedex">
        <ul>
        {List}
        </ul>
      </section>
  );
  }
}

export default PokemonIndex;
