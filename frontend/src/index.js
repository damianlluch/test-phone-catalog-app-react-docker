import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Header } from './components';
import { PhoneList, PhoneDetails } from './containers';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <React.Fragment>
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={PhoneList} />
          <Route path="/phones/:id" component={PhoneDetails} />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
