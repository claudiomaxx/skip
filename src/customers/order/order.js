import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';


import { orderAction } from './order-actions'

class Order extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (!this.props.customer) {
            this.props.history.push('/customer/login')
        }
    }

    renderProductStore(productStore, key) {

        console.log(productStore, '>>>>>>>>>');
        

        return (
            <div>
                {key}
                <ul>
                    {_.map(productStore, this.renderProduct)}
                </ul>
            </div>
        )
    }

    renderProduct({ id, name, price }) {
        return (
            <li key={id}>
                <h5>{name}</h5>
                <span>{price}</span>
            </li>
        )
    }

    renderField(field) {

        const { touched, error } = field.meta

        return (
            <div>
                <input type={field.type} placeholder={field.placeholder} {...field.input} />
                <span className="message--error">{touched && error}</span>
            </div>
        )
    }

    onSubmit(form) {
        this.props.orderAction(form, response => {
            this.props.history.push('/order/list')
        });
    }

    render() {
        const { customer, cart } = this.props

        const productByStore = _.mapKeys(cart, 'storeId')

        console.log(productByStore);
        

        return (
            <div>
                <ul>
                    {_.map(productByStore, this.renderProductStore.bind(this))}
                </ul>

                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="contact" placeholder="Contact" type="text" component={this.renderField} />
                    <Field name="deliveryAddress" placeholder="Address" type="text" component={this.renderField} />

                    <button type="submit">Enter</button>
                </form>
            </div>
        )
    }
}

function validate(form) {

    const ret = {};

    if (!form.contact) {
        ret.contact = 'Contact is required'
    }

    if (!form.deliveryAddress) {
        ret.deliveryAddress = 'Address is required'
    }

    return ret
}

function mapStateToProps({ customer, cart }) {
    return { customer, cart }
}

export default reduxForm({
    form: 'orderFrm',
    validate
})(connect(mapStateToProps, { orderAction })(Order));