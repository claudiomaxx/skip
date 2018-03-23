import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

import { signupAction } from './customer-auth-action'
import InputText from '../../components/input-text'

class CustomerAuthSignup extends Component {

    onSubmit(form) {
        this.props.signupAction(form, response => {

            // FIXME async problem
            setTimeout(() => {
                this.props.history.push('/products')

            }, 300)

            return response
        });
    }

    render() {
        return (
            <div id="skip-login">
                <h3>Sign up</h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="name" placeholder="Name" type="text" component={InputText} />
                    <Field name="email" placeholder="Email" type="text" component={InputText} />
                    <Field name="password" placeholder="Password" type="password" component={InputText} />
                    <Field name="address" placeholder="Address" type="text" component={InputText} />

                    <div className="button-group">
                        <button type="submit" className="btn btn-primary">Enter</button>
                        <Link to="/" className="btn btn-link">Back</Link>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(form) {

    const ret = {};

    if (!form.name) {
        ret.name = 'Name is required'
    }

    if (!form.email) {
        ret.email = 'Email is required'
    }

    if (!form.password) {
        ret.password = 'Password is required'
    }

    if (!form.address) {
        ret.address = 'Address is required'
    }

    return ret
}

export default reduxForm({
    form: 'signupFrm',
    validate
})(connect(null, { signupAction })(CustomerAuthSignup));