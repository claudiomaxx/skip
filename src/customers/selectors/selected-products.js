import _ from 'lodash'
import { createSelector } from 'reselect'

// represents the reducers
const productSelector = state => state.productList
const cartSelector = state => state.cart

const getProductsInCart = (productList, cart) => {

    // filter product list
    const selectedProducts = _.filter(
        productList, 

        // search in cart for product.id
        product => _.includes(Object.keys(cart), product.id + '') // Object.keys returns ['1', '2'], so convert id to string
    )
    
    return selectedProducts
}

export default createSelector(
    productSelector,
    cartSelector,
    getProductsInCart
)