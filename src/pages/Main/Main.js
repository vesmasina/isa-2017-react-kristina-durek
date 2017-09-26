
import React, {Component} from 'react';

import logoImage from '../../assets/logo.png';
import styles from './Main.css';

export default class Main extends Component {

  render() {
    return (
      <div className={styles.header}>
        <div>
        	<img className={styles.logo} src={logoImage} alt="logo" />
        </div>
        {this.props.children}
      </div>
    );
  }
}
