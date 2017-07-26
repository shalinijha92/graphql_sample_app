import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import './App.css';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  toIdValue,
} from 'react-apollo';

import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

import {cartCount, gwData} from './reducers';
import HeaderContainer from './components/Header/HeaderContainer';
import GridWallContainer from './components/GridWall/GridWallContainer';
import productList from './resources/products.json';
import CartContainer from './components/Cart/CartContainer';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });

const wsClient = new SubscriptionClient(`ws://localhost:4000/subscriptions`, {
  reconnect: true
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
});

const appData = combineReducers({
    cartCount,
    gwData,
    apollo: client.reducer(),
})

const store = createStore(
  appData,
  productList, // initial state
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <BrowserRouter>
          <div>
            <HeaderContainer />
            <Route path='/' exact={true} component={GridWallContainer} />
            <Route path='/cart' exact={true} component={CartContainer} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
