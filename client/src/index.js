import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import { store } from './store/store';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>
);
