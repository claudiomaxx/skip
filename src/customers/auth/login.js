import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import { loginAction } from './customer-auth-action'

class CustomerAuthLogin extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Login</h3>

                <form>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button onClick={() => this.login()}>Enter</button>
                </form>
            </div>
        )
    }
}


function validate(form) {
    return {}
}

export default reduxForm({
    form: 'loginFrm',
    validate
})(connect(null, { loginAction })(CustomerAuthLogin));