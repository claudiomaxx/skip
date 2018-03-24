import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';

import { addToCartAction, removeFromCartAction } from './cart-actions'
import { orderAction } from '../order/order-actions'

import InputText from '../../components/input-text'

class Cart extends Component {

    constructor(props) {
        super(props)

        this.renderProduct = this.renderProduct.bind(this)
    }

    renderProduct(product) {
        const { id, name, price, storeId } = product

        return (
            <li key={id}>
                <div>
                    <span>{storeId}</span>
                    <h5>{name}</h5>
                </div>
                <span className="product-price">{price.toFixed(2)}</span>
            </li>
        )
    }

    renderDeliveryForm() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <hr />

                <h4>Delivery info</h4>

                <Field name="contact" placeholder="Contact" type="text" component={InputText} />
                <Field name="deliveryAddress" placeholder="Address" type="text" component={InputText} />

                <div className="control-group">
                    <button type="submit" className="btn btn-primary">Place order</button>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div>
                <h4>Cart</h4>

                {this.isCartEmpty() && 'THE CART IS EMPTY'}

                {!this.isCartEmpty() && (
                    <div>
                        <ul className="list">
                            {_.map(this.props.cart, this.renderProduct)}
                        </ul>
                        <div>
                            {this.renderDeliveryForm()}
                        </div>
                    </div>
                )}
            </div>
        )
    }

    isCartEmpty() {
        return Object.keys(this.props.cart).length === 0
    }

    onSubmit(form) {
        const cartByStore = {}

        _.each(this.props.cart, product => {
            cartByStore[product.storeId] = cartByStore[product.storeId] || []
            cartByStore[product.storeId].push(product)
        })

        _.each(cartByStore, (order, storeId) => {
            const orderItems = _.map(order, product => {
                return {
                    'productId': product.id,
                    'product': product,
                    'price': product.price,
                    'quantity': 1,
                    'total': product.price
                }
            })

            console.log(orderItems);


            this.props.orderAction({
                'date': new Date(),
                'customerId': this.props.customer.id,
                'deliveryAddress': form.deliveryAddress,
                'contact': form.contact,
                'storeId': storeId,
                'orderItems': orderItems,
                'total': 0 //,
                // 'status': 'string',
                // 'lastUpdate': '2018-03-17T21:05:52.248Z'
            }, response => {
                console.log('>>', response);

            });

        })
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

function mapStateToProps({ cart, customer }) {
    return { cart, customer }
}


export default reduxForm({
    form: 'cartFrm',
    validate
})(connect(mapStateToProps, { addToCartAction, orderAction })(Cart));
