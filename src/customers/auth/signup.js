import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import { signupAction } from './customer-auth-action'

class CustomerAuthSignup extends Component {

    constructor(props) {
        super(props)
    }

    renderField(field) {
        return (
            <input type={field.type} placeholder={field.placeholder} {...field.input} />
        )
    }

    onSubmit(form) {
        this.props.signupAction(form, response => {
            console.log(response, this.props.history)
            //this.props.history.push('/place-order');
        });
    }

    render() {
        return (
            <div>
                <h3>Sign up</h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="name" placeholder="Name" type="text" component={this.renderField} />
                    <Field name="email" placeholder="Email" type="text" component={this.renderField} />
                    <Field name="password" placeholder="Password" type="password" component={this.renderField} />
                    <Field name="address" placeholder="Address" type="text" component={this.renderField} />

                    <button type="submit">Enter</button>
                </form>
            </div>
        )
    }
}

function validate(form) {
    return {}
}

export default reduxForm({
    form: 'signupFrm',
    validate
})(connect(null, { signupAction })(CustomerAuthSignup));