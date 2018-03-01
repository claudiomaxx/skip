import React, { Component } from 'react';
import { connect } from 'react-redux';

class TmTaskDetail extends Component {
    render() {
        if (!this.props.task) {
            return (
                <div>
                    <h3>No task so far</h3>
                </div>
            );
        }

        return (
            <div>
                <h3>Task detail</h3>
                <div>{this.props.task.title}</div>
            </div>
        );
    }
}

export default connect(function (state) {
    return {
        task: state.taskSelected
    }
})(TmTaskDetail);