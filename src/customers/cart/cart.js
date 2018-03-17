import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCartAction, removeFromCartAction } from './cart-actions'

class Cart extends Component {

    constructor(props) {
        super(props)

        this.renderProduct = this.renderProduct.bind(this)
    }

    renderProduct(productId) {

        const { id, name, price } = this.props.productList[productId]

        return (
            <li key={id}>
                <h5>{name}</h5>
                <span>{price}</span>
                {/* <button onClick={() => this.props.removeFromCartAction(id)}>Remove</button> */}
            </li>
        )
    }

    render() {
        return (
            <div>
                <h4>Cart</h4>
                <ul>
                    {_.map(this.props.cart, this.renderProduct)}
                </ul>

                { this.props.cart.length > 0 && <Link to="/order">Place order</Link> }
            </div>
        )
    }
}

function mapStateToProps({ cart, productList }) {
    return { cart, productList }
}

export default connect(mapStateToProps, { addToCartAction, removeFromCartAction })(Cart)
