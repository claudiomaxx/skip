import React from 'react';

// receive props.taskList
const TmTaskList = ({ taskList }) => {

    if (!taskList || taskList.length === 0) {
        return (
            <div className="empty-list">
                There is no task at the moment. Let's get you a cup of coffee!
            </div>
        );
    }

    const taskListItems = taskList.map(function (task) {
        return (
            <li className="flex-container flex-center" key={task.key}>
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

    return (
        <div className="tm-box">
            <div className="col-24">
                <h3 className="tm-box--header">TEAM TASKS</h3>

                <ul className="list">
                    {taskListItems}
                </ul>
            </div>
        </div>
    );
};

export default TmTaskList;