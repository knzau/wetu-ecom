import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import { store } from './store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ClerkProvider } from '@clerk/clerk-react';

const queryClient = new QueryClient();
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignInUrl="/profile"
      afterSignUpUrl="/profile">
      <StoreProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </StoreProvider>
    </ClerkProvider>
  </React.StrictMode>
);
