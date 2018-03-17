import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form';

import ProductListReducer from './product-list/product-list-reducer'
import CartReducer from './cart/cart-reducer'
import CustomerAuthReducer from './auth/customer-auth-reducer'

export default combineReducers({
    customer: CustomerAuthReducer,
    productList: ProductListReducer,
    cart: CartReducer,
    form: FormReducer
})