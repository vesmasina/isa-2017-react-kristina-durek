
import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';

@inject('appState') @observer
export default class PokemonDetailPage extends Component {

  render() {
    return (
      <PokemonDetail id={this.props.params.id} appState={this.props.appState} />
    );
  }
}
