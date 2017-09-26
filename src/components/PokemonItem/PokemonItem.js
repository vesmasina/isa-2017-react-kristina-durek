
import React, {Component} from 'react';
import { browserHistory, Link } from 'react-router';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';

import styles from './PokemonItem.css';
import downvoteSelectImage from '../../assets/thumb_down_selected.png';
import downvoteImage from '../../assets/thumb_down.png';
import upvoteSelectImage from '../../assets/thumb_up_selected.png';
import upvoteImage from '../../assets/thumb_up.png';

@inject("appState") @observer
export default class PokemonItem extends Component {
  @observable upvote = false;
  @observable downvote = false;

  componentWillMount() {
    this.upvote = this.props.appState.upvoteList[this.props.index]
    this.downvote = this.props.appState.downvoteList[this.props.index]
  }

  onUpvote(event) {
    this.upvote = true;
    this.downvote = false;
    this.props.appState.upvoteList[this.props.index] = this.upvote;
    this.props.appState.downvoteList[this.props.index] = this.downvote;
    event.stopPropagation();
  }

  onDownvote(event) {
    this.upvote = false;
    this.downvote = true;
    this.props.appState.upvoteList[this.props.index] = this.upvote;
    this.props.appState.downvoteList[this.props.index] = this.downvote;
    event.stopPropagation();
  }

  onSelect() {
    browserHistory.push(`/pokemon/${this.props.index}`)
  }

  render() {
    let upvoteImg = null;
    let downvoteImg = null;
    let pokemon = this.props.pokemon;
    if(this.upvote)
      upvoteImg = <img src={upvoteSelectImage} alt="Upvote" />
    else
      upvoteImg = <img src={upvoteImage} alt="Upvote" />
    if(this.downvote)
      downvoteImg = <img src={downvoteSelectImage} alt="Downvote" />
    else
      downvoteImg = <img src={downvoteImage} alt="Downvote" />

    return (
      <Link onClick={() => this.onSelect()} className={styles.pokemonItemLink}>
        <div className={styles.pokemonItemContainer}>
          <img
            className={styles.pokemonItemAvatar}
            src={`https://pokedex.byinfinum.co/${pokemon.attributes['image-url']}`}
            alt="pokemon" />
          <div style={{height: '30px'}}>
            <div className={styles.pokemonItemName}>{pokemon.attributes.name}</div>
            <button className={styles.btnVote} onClick={(event) => this.onDownvote(event)}> {downvoteImg} </button>
            <button className={styles.btnVote} onClick={(event) => this.onUpvote(event)}> {upvoteImg} </button>
          </div>
          <p className={styles.pokemonItemDescription}>{pokemon.attributes.description}</p>
        </div>
      </Link>
    );
  }
};
