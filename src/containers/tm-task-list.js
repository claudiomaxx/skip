import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTask } from '../actions/index';

class TmTaskList extends Component {

    renderTaskListItems() {
        return this.props.taskList.map((task) => {
            return (
                <li className="flex-container flex-center" key={task.id} onClick={() => { this.props.selectTask(task) }}>
                    <div className="col-12">
                        <h5>{task.title}</h5>
                        <span className="desc">Created by: {task.createdBy} &bull; {task.createdByDepartment}</span>
                    </div>
                    <div className="col-8">
                        <span className="tag">{task.status}</span>
                        <span className="tag">{task.responsible}</span>
                    </div>
                    <div className="col-4 ta-right">
                        <i className="material-icons tx-grey">description</i>
                    </div>
                </li>
            );
        });
    }

    render() {
        if (!this.props.taskList || this.props.taskList.length === 0) {
            return (
                <div className="empty-list">
                    There is no task at the moment. Let's get you a cup of coffee!
                </div>
            );
        }

        return (
            <div className="tm-box" >
                <div className="col-24">
                    <h3 className="tm-box--header">TEAM TASKS</h3>

                    <ul className="list">
                        {this.renderTaskListItems()}
                    </ul>
                </div>
            </div>
        );
    }

    
}

function mapStateToProps(state) {
    return {
        taskList: state.taskList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectTask: selectTask
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TmTaskList);