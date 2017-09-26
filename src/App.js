
import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'mobx-react';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';

class App extends Component {
  
  render() {
    return (
      <Provider appState={this.props.appState}>
        <Router history={browserHistory}>
          <Route path="/" component={Login} />
          <Route path="/pokemon" component={Main} >
            <IndexRoute component={PokemonList} />
            <Route path=":id" component={PokemonDetail} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
