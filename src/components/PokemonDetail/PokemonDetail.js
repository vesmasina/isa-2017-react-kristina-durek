
import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import PageTitle from '../PageTitle/PageTitle';
import { getPokemon } from '../../service/service';

import downvoteSelectImage from '../../assets/thumb_down_selected.png';
import downvoteImage from '../../assets/thumb_down.png';
import upvoteSelectImage from '../../assets/thumb_up_selected.png';
import upvoteImage from '../../assets/thumb_up.png';
import styles from './PokemonDetail.css';

@observer
class PokemonDetail extends Component {
  @observable loading = false;
  @observable pokemon = null;
  @observable upvote = false;
  @observable downvote = false;

  componentWillMount() {
    this.pokemon = this.props.appState.pokemonList[this.props.id]
    this.upvote = this.props.appState.upvoteList[this.props.id]
    this.downvote = this.props.appState.downvoteList[this.props.id]
  }

  onUpvote() {
    this.upvote = true;
    this.downvote = false;
    this.props.appState.upvoteList[this.props.id] = this.upvote;
    this.props.appState.downvoteList[this.props.id] = this.downvote;
  }

  onDownvote() {
    this.upvote = false;
    this.downvote = true;
    this.props.appState.upvoteList[this.props.id] = this.upvote;
    this.props.appState.downvoteList[this.props.id] = this.downvote;
  }

  onChoosePokemon() {
    browserHistory.goBack();
  }

  render() {
    const pokemon = this.pokemon;
    if (!pokemon) {
      return null;
    }
    const pokemonAttr = pokemon.attributes;
    let upvoteImg = null;
    let downvoteImg = null;
    if(this.upvote)
      upvoteImg = <img src={upvoteSelectImage} alt="Upvote" />
    else
      upvoteImg = <img src={upvoteImage} alt="Upvote" />
    if(this.downvote)
      downvoteImg = <img src={downvoteSelectImage} alt="Downvote" />
    else
      downvoteImg = <img src={downvoteImage} alt="Downvote" />
    return (
      <div>
        <PageTitle text={pokemon.attributes.name} />
        <div className={styles.pokemonDetailContainer}>
          <div className={styles.colMd6}>
            <img
              className={styles.pokemonDetailImage}
              src={`https://pokedex.byinfinum.co/${pokemon.attributes['image-url']}`} 
              alt="logo" />
          </div>
          <div className={styles.colMd6}>
            <div className={styles.pokemonDetailAbout}>About</div>
            <p>{pokemon.attributes.description}</p>
            <div className={styles.pokemonDetailAbout}>INFO</div>
            <div className={styles.colMd6}>
              <p className={styles.attrTitle}>HEIGHT</p>
              <p>{pokemonAttr.height}</p>
              <p className={styles.attrTitle}>WEIGHT</p>
              <p>{pokemonAttr.weight} lbs</p>
            </div>
            <div className={styles.colMd6}>
              <p className={styles.attrTitle}>GENDER</p>
              <p>{pokemonAttr.gender}</p>
              <p className={styles.attrTitle}>TYPE</p>
              <p className={styles.attr}>{pokemon.type}</p>
            </div>
            <button className={styles.btnVote} onClick={() => this.onUpvote()}> {upvoteImg} </button>
            <span className={styles.btnTitle}>Like</span>
            <button className={styles.btnVote} onClick={() => this.onDownvote()}> {downvoteImg} </button>
            <span className={styles.btnTitle}>Dislike</span>
            <button className={styles.btnChoose}  onClick={() => this.onChoosePokemon()}> CHOOSE POKEMON </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
