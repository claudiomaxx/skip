import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createDepartment } from '../actions';

class DepartmentNew extends React.Component {

    renderComponent({ placeholder, size, input, meta }) {

        const { touched, error } = meta;

        return (
            <div className="form-element">
                <input type="text" placeholder={placeholder} size={size} {...input} />
                <span className="message--error">{touched && error}</span>
            </div>
        );
    }

    onSubmit(form) {
        this.props.createDepartment(form, department => {
            this.props.history.push('/department/list');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="tm-box">
                <div className="col-24">
                    <h3 className="tm-box--header">CREATE A DEPARTMENT</h3>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                        <Field name="name" placeholder="Department name" size="50" component={this.renderComponent} />

                        <button className="btn--primary">Save</button>
                        <Link to="/department/list" className="btn btn--none">Cancel</Link>
                    </form>
                </div>
            </div>
        )
    };

};

function validate(field) {
    const err = {};

    if (!field.name) {
        err.name = 'Department name is required';
    }

    return err;
}

export default reduxForm({
    form: 'departmentFrm',
    validate
})(connect(null, { createDepartment })(DepartmentNew));