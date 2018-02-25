import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TmHeader from './components/tm-header';
import TmTaskList from './components/tm-task-list';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskList: [{
                key: 1,
                title: 'Lorem ipsum dolor sit amet consectetur entrepreneour',
                createdBy: 'Claudio Silva',
                createdByDepartment: 'Marketing',
                status: 'Started',
                responsible: 'Lucila Medeiros'
            }, {
                key: 2,
                title: 'Lorem ipsum dolor sit amet consectetur',
                createdBy: 'Lucila Medeiros',
                createdByDepartment: 'IT',
                status: 'Started',
                responsible: 'Claudio Silva'
            }]
        };
    }

    render() {
        return (
            <div>
                <TmHeader />
                <div id="tm-content">
                    <TmTaskList taskList={this.state.taskList} />
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));