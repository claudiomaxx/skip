import _ from 'lodash'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchProductListAction } from './product-list-actions'
import { addToCartAction } from '../cart/cart-actions'
import Cart from '../cart/cart'

class ProductList extends Component {

    constructor(props) {
        super(props)

        this.renderProduct = this.renderProduct.bind(this)
    }

    componentDidMount() {
        console.log('component ok');

        this.props.fetchProductListAction()
    }

    renderProduct(product) {
        return (
            <li key={product.id}>
                <h5>{product.name}</h5>
                <span>{product.description}</span>
                <span>{product.price}</span>
                <button onClick={() => this.props.addToCartAction(product.id)}>Add to cart</button>
            </li>
        )
    }

    render() {
        return (
            <div>
                <div id="skip-content" className="col-xs-6">
                    <ul>
                        {_.map(this.props.list, this.renderProduct)}
                    </ul>
                </div>
                <div id="skip-cart" className="col-xs-6">
                    <Cart />
                </div>
            </div>
        )
    }

}

function mapStateToProps({ productList }) {
    return { list: productList }
}

export default connect(mapStateToProps, { fetchProductListAction, addToCartAction })(ProductList)