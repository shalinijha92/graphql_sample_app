import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import createBrowserHistory from 'history/createBrowserHistory';

import './Components/App/App.css';
import './index.css';
import App from './Components/App/App';
import CartContainer from './Components/Cart/CartContainer';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql' }),
});

ReactDOM.render(
<ApolloProvider client={client}>
    <Router>
            <div>
                <Route path='/gridwall' component={App}/>
                <Route path='/cart' component={CartContainer}/>
            </div>
        </Router>
</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
