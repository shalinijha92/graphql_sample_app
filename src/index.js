import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

import './components/App/App.css';
import './index.css';
import App from './components/App/App';
import Header from './components/Header/Header';
import CartContainer from './components/Cart/CartContainer';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql' }),
});

ReactDOM.render(
<ApolloProvider client={client}>
    <Router>
            <div>
                <Header />
                <Route path='/' exact={true} component={App}/>
                <Route path='/cart' exact={true} component={CartContainer}/>
            </div>
        </Router>
</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
