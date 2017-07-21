import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

import './components/App/App.css';
import './index.css';
import App from './components/App/App';
import HeaderContainer from './components/Header/HeaderContainer';
import CartContainer from './components/Cart/CartContainer';
import {cartCount} from './reducers';

import registerServiceWorker from './registerServiceWorker';

const wsClient = new SubscriptionClient(`ws://localhost:8080/`, {
  reconnect: true
});

// Create a normal network interface:
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql'
});
// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions({
  networkInterface,
  wsClient
});

// Finally, create your ApolloClient instance with the modified network interface
const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});

const appData = combineReducers({
    cartCount: cartCount,
    apollo: client.reducer(),
})

const store = createStore(
  appData,
  {}, // initial state
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

ReactDOM.render(
<ApolloProvider client={client} store={store}>
    <Router>
            <div>
                <HeaderContainer />
                <Route path='/' exact={true} component={App}/>
                <Route path='/cart' exact={true} component={CartContainer}/>
            </div>
        </Router>
</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
