import { createStore, applyMiddleware } from 'redux'
import bankReducer from './bankReducer';

const myLogger = (store) => (next) => (action) => {
    console.log('dispatching: ', action);
    return next(action);
}
const bankStore = createStore(
    bankReducer,
    applyMiddleware(myLogger)
);

export default bankStore;