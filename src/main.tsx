import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as URQLProvider } from 'urql';

import { App } from './app';
import { urqlClient } from './urqlClient';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <URQLProvider value={urqlClient}>
      <App />
    </URQLProvider>
  </React.StrictMode>
);
