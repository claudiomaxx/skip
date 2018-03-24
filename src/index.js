import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

import SkipHeader from './components/skip-header'

import Order from './customers/order/order'
import ProductList from './customers/product-list/product-list'
import CustomerAuthSignup from './customers/auth/signup'
import CustomerAuthLogin from './customers/auth/login'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div id="skip">
                <SkipHeader />
                <Switch>
                    <Route path="/customer/signup" component={CustomerAuthSignup} />
                    <Route path="/customer/login" component={CustomerAuthLogin} />
                    <Route path="/order" component={Order} />
                    <Route path="/cousine/:cousineId" component={ProductList} />
                    <Route path="/products" component={ProductList} />
                    <Route path="/" component={CustomerAuthLogin} />
                </Switch>
            </div>
        </BrowserRouter>

    </Provider>
    , document.querySelector('.root'));