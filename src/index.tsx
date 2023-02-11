import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

const container = document.getElementById('root');
const root = createRoot(container!);

const client = new ApolloClient({
  uri: 'http://localhost:4800/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetGategories {
        categories {
          id
          title
        }
      }
    `,
  })
  .then((result) => console.log(result));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
      </PersistGate>
    </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
