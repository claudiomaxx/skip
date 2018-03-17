import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';


// import { addToCartAction, removeFromCartAction } from './cart-actions'

class Order extends Component {

    constructor(props) {
        super(props)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                order
                <div className="col-xs-6">
                </div>
                <div className="col-xs-6">
                </div>
            </div>
        )
    }
}


export default Order;