import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import './components/App/App.css';
import './index.css';
import App from './components/App/App';
import HeaderContainer from './components/Header/HeaderContainer';
import CartContainer from './components/Cart/CartContainer';
import {cartCount} from './reducers';

import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql' }),
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
