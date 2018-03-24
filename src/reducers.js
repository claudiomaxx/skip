import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form';

import ProductListReducer from './customers/product-list/product-list-reducer'
import CartReducer from './customers/cart/cart-reducer'
import CustomerAuthReducer from './customers/auth/customer-auth-reducer'
import StoresReducer from './restaurant/stores-reducer'

export default combineReducers({
    customer: CustomerAuthReducer,
    productList: ProductListReducer,
    cart: CartReducer,
    stores: StoresReducer,
    form: FormReducer
})