import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { fetchDepartments, createTask } from '../actions';

import { InputText, TextArea, SelectOne } from './tm-form';

class TaskNew extends React.Component {

    componentDidMount() {
        this.props.fetchDepartments();
    }

    onSubmit(form) {
        this.props.createTask(form, () => this.props.history.push('/task/list'));
    }

    render() {
        return (
            <div className="tm-box">
                <form name="taskFrm" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <h3 className="tm-box--header">CREATE A TASK</h3>

                    <Field name="title" placeholder="Task name" size="50" component={InputText} />
                    <Field name="description" size="50" placeholder="Task description" component={InputText} />
                    <Field name="departmentId" placeholder="Select a department" list={this.props.departmentList} component={SelectOne} />

                    <button className="btn--primary">Save</button>
                    <Link to="/task/list" className="btn btn--none">Cancel</Link>
                </form>
            </div >
        );
    }

}

function validate(form) {
    const err = {};

    if (!form.title) {
        err.title = 'Name is required';
    }

    if (!+form.departmentId) {
        err.departmentId = 'Department is required';
    }

    if (!form.description) {
        err.description = 'Description is required';
    }

    return err;
}

function mapsStateToProps({ departmentList }) {
    return { departmentList };
}

export default reduxForm({
    form: 'taskFrm',
    validate
})(connect(mapsStateToProps, { fetchDepartments, createTask })(TaskNew));