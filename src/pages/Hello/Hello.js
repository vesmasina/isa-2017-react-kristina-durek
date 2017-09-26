import React, {Component} from 'react';

import {getPokemon} from '../services/api';

class HelloPage extends Component {

  componentWillMount() {
    const {name} = this.props.params;
  
    getPokemon(name).then((response) => {
      console.log(response);
    });
  }

  render() {
    const {name} = this.props.params;
    return (
      <h1>
        Hello {name}!
      </h1>
    );
  }

}

export default HelloPage;
