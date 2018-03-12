import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

import TmHeader from './components/tm-header';
import TmSideMenu from './components/tm-side-menu';

import TaskNew from './components/tm-task-new';
import TaskList from './components/tm-task-list';
import DepartmentNew from './components/tm-department-new';
import DepartmentList from './components/tm-department-list';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div id="tm">
                <TmHeader />

                <div className="tm-flex-col">
                    <TmSideMenu />
                    <div id="tm-content">
                        <Switch>
                            <Route path="/department/list" component={DepartmentList} />
                            <Route path="/department/new" component={DepartmentNew} />
                            <Route path="/task/new" component={TaskNew} />
                            <Route path="/" component={TaskList} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    </Provider>
    , document.querySelector('.root'));