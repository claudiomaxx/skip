import _ from 'lodash'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchProductListAction } from './product-list-actions'
import { fetchStoresAction } from '../../restaurant/stores-actions'
import { addToCartAction } from '../cart/cart-actions'
import Cart from '../cart/cart'

class ProductList extends Component {

    constructor(props) {
        super(props)

        this.renderProduct = this.renderProduct.bind(this)
    }

    componentDidMount() {
        this.props.fetchStoresAction()
        this.props.fetchProductListAction()
    }

    renderProduct(product) {
        return (
            <li key={product.id}>
                <div>
                    <span>{this.props.stores && this.props.stores[product.storeId].name}</span>
                    <h5>{product.name}</h5>
                    <span>{product.description}</span>
                </div>
                <div className="product-add-cart">
                    <span className="product-price">{product.price.toFixed(2)}</span>
                    <button onClick={() => this.props.addToCartAction(product)} className="btn btn-primary"><i className="material-icons">add_shopping_cart</i></button>
                </div>
            </li>
        )
    }

    render() {
        return (
            <div id="container">
                <div id="skip-content" className="col-xs-8">
                    <h4>Product List</h4>
                    <ul className="list">
                        {_.map(this.props.list, this.renderProduct)}
                    </ul>
                </div>
                <div id="skip-cart" className="col-xs-4">
                    <Cart />
                </div>
            </div>
        )
    }

}

function mapStateToProps({ productList, stores }) {
    return { list: productList, stores }
}

export default connect(mapStateToProps, { fetchProductListAction, addToCartAction, fetchStoresAction })(ProductList)