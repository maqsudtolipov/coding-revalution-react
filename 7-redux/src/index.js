import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createTheme, NextUIProvider } from '@nextui-org/react';

import { Provider } from 'react-redux';
import { store } from './store/index';

const theme = createTheme({
  type: 'dark',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider theme={theme}>
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
