
import React from 'react';
import {render} from 'react-dom';

import App from './App';

import AppState from './store/AppState.js';

var appState = new AppState();

render(<App appState={appState} />  , document.querySelector('#root'));
