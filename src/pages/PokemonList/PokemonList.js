
import React, {Component} from 'react';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';

import PageTitle from '../../components/PageTitle/PageTitle';
import PokemonItem from '../../components/PokemonItem/PokemonItem';
import { getPokemons } from '../../service/service';

import styles from './PokemonList.css';

@inject("appState") @observer
export default class PokemonListPage extends Component {
  @observable loading = false;
  @observable pokemons = [];
  
  componentWillMount() {
    if(this.props.appState.pokemonList.length > 0) {
      this.pokemons = this.props.appState.pokemonList;
      return;
    }
    this.loading = true;
    getPokemons(this.props.appState).then(
      (response) => {
        this.props.appState.pokemonList = response.data;
        this.props.appState.initVoteLists();
        this.pokemons = response.data;
        this.loading = false;
      }, (err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <PageTitle text={'Pokedex'} />
	      <div className={styles.pokemonListContainer}>
	        {
            this.pokemons.map((pokemon, index, arr) => 
              <PokemonItem pokemon={pokemon} index={index} key={Math.random()} />
            )
	        }
	      </div>
      </div>
    );
  }
}
