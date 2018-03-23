import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

import { loginAction } from './customer-auth-action'
import InputText from '../../components/input-text'


class CustomerAuthLogin extends Component {

    constructor(props) {
        super(props)
    }

    onSubmit(form) {
        this.props.loginAction(form, response => {

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
                <h3>Login</h3>

                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="email" placeholder="Email" type="text" component={InputText} />
                    <Field name="password" placeholder="Password" type="password" component={InputText} />

                    <div className="button-group">
                        <button type="submit" className="btn btn-primary">Enter</button>
                        <Link to="/customer/signup" className="btn btn-link">Not a user?</Link>
                    </div>
                </form>
            </div>
        )
    }
}


function validate(form) {

    const ret = {};

    if (!form.email) {
        ret.email = 'Email is required'
    }

    if (!form.password) {
        ret.password = 'Password is required'
    }

    return ret
}

export default reduxForm({
    form: 'loginFrm',
    validate
})(connect(null, { loginAction })(CustomerAuthLogin));