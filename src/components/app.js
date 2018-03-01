import React, { Component } from 'react';
import TmHeader from '../components/tm-header';
import TmTaskList from '../containers/tm-task-list';
import TmTaskDetail from '../containers/tm-task-detail';

export default class App extends Component {
    render() {
        return (
            <div>
                <TmHeader />
                <div id="tm-content">
                    <TmTaskList />
                    <TmTaskDetail />
                </div>
            </div>
        );
    }
}