import { createStore, applyMiddleware} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import composeWithDevTools from 'redux';
import RootReducer from './Store/RootReducer';
import thunk from 'redux-thunk';




const Store = createStore(
    RootReducer,
    applyMiddleware(thunk)
)


export default Store