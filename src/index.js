import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import state from './components/main/Redux/state';
import ContextData, { data } from './components/main/Redux/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextData.Provider value={data}>
    <BrowserRouter>
      <App stateApp={state}/>
    </BrowserRouter>
  </ContextData.Provider>
);