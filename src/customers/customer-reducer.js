import { combineReducers } from 'redux'
import ProductListReducer from './product-list/product-list-reducer'
import CartReducer from './cart/cart-reducer'
import { reducer as FormReducer } from 'redux-form';

export default combineReducers({
    productList: ProductListReducer,
    cart: CartReducer,
    form: FormReducer
})