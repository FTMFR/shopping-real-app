import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailReducer } from './reducer/productReducer';
import { cardRedcer } from './reducer/cardReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    card: cardRedcer,
});

const cardItemFromLocalStorage = localStorage.getItem('cardItems') ? JSON.parse(localStorage.getItem('cardItems')) : []


const initialstate = {
    card: { cardItems: cardItemFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialstate, applyMiddleware(...middleware));

export default store;