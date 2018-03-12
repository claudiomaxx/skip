import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTasks, fetchDepartments, updateTask, TASK_STATUS } from '../actions';

class TmTaskList extends Component {

    constructor(props) {
        super(props);
        this.renderTaskListItem = this.renderTaskListItem.bind(this);
        this.resumeTask = this.resumeTask.bind(this);
        this.pauseTask = this.pauseTask.bind(this);
        this.finishTask = this.finishTask.bind(this);
    }

    componentDidMount() {
        this.props.fetchTasks();
        this.props.fetchDepartments();
    }

    resumeTask(task) {
        task.status = TASK_STATUS.STARTED;
        this.props.updateTask(task, () => this.props.fetchTasks());
    }

    pauseTask(task) {
        task.status = TASK_STATUS.PAUSED;
        this.props.updateTask(task, () => this.props.fetchTasks());
    }

    finishTask(task) {
        task.status = TASK_STATUS.FINISHED;
        this.props.updateTask(task, () => this.props.fetchTasks());
    }

    renderIconStatus(task) {
        switch (task.status.toLowerCase()) {
            case 'created':
                return (
                    <button className="btn--icon" onClick={event => this.resumeTask(task)}>
                        <i className="material-icons tx-success">play_arrow</i>
                    </button>
                )

            case 'started':
                return (
                    <div>
                        <button className="btn--icon" onClick={event => this.pauseTask(task)}>
                            <i className="material-icons tx-warning">pause</i>
                        </button>
                        <button className="btn--icon" onClick={event => this.finishTask(task)}>
                            <i className="material-icons tx-success">check</i>
                        </button>
                    </div>
                )

            case 'paused':
                return (
                    <button className="btn--icon" onClick={event => this.resumeTask(task)}>
                        <i className="material-icons tx-success">play_arrow</i>
                    </button>
                )

            default:
                return null;
        }
    }

    renderTaskListItem(task) {

        const { departmentList } = this.props;
        const { name: departmentName } = departmentList[task.departmentId] || '';

        return (
            <li className="flex-container flex-center" key={task.id}>
                <div className="col-12">
                    <h5>{task.title}</h5>
                    <span className="desc">{task.description}</span>{/* Created by: {task.createdBy} &bull; {task.createdByDepartment} */}
                </div>
                <div className="col-8">
                    <span className="tag">{task.status}</span>
                    <span className="tag">{departmentName}</span>
                </div>
                <div className="col-4 ta-right">
                    {this.renderIconStatus(task)}
                </div>
            </li>
        );
    }

    render() {
        const { taskList } = this.props;

        if (Object.keys(taskList).length === 0) {
            return (
                <div className="empty-list">
                    There is no task at the moment. Go get a cup of coffee!
                </div>
            );
        }

        return (
            <div className="tm-box" >
                <div className="col-24">
                    <h3 className="tm-box--header">TASKS</h3>

                    <ul className="list">
                        {_.map(taskList, this.renderTaskListItem)}
                    </ul>
                </div>
            </div>
        );
    }


}

function mapStateToProps({ taskList, departmentList }) {
    return { taskList, departmentList }
}

export default connect(mapStateToProps, { fetchTasks, fetchDepartments, updateTask })(TmTaskList);