import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';

import { login } from '../../service/service';
import logoImage from '../../assets/logo.png';
import pokeBallImage from '../../assets/pokeball_ball.png';

import styles from './Login.css';

@inject("appState") @observer
class LoginPage extends Component {
  @observable username = 'kristina@infinum.co';
  @observable password = 'Pa$$w0rd';

  usernameChanged(event) {
    this.username = event.target.value;
  }

  passwordChanged(event) {
    this.password = event.target.value;
  }

  onLogin() {
    let self = this;
    const loginData = {
      username: this.username,
      password: this.password
    };
    login(loginData).then(
      function(response) {
        self.props.appState.setUserEmail(response.data.attributes.email);
        self.props.appState.setToken(response.data.attributes['auth-token']);
        browserHistory.replace('/pokemon');
      }, function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className={styles.loginContainer}>
        <img src={logoImage} alt="Logo" />
        <img src={pokeBallImage} alt="Pokeball" />
        <div className={styles.formContainer}>
          <input type='text' value={this.username} placeholder='Email:' className={styles.inputText} onChange={(event) => this.usernameChanged(event)} />
          <input type='password' value={this.password} placeholder='Password:' className={styles.inputText} onChange={(event) => this.passwordChanged(event)} />
          <button className={styles.btnLogin} onClick={() => this.onLogin()}> Login </button>
          <button className={styles.btnRegister}> Register </button>
        </div>
      </div>
    );
  }

}

export default LoginPage;
