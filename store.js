import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
import reducer from './reducers/reducer';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const middleware = applyMiddleware(thunk, historyMiddleware, createLogger());
const store = createStore(reducer, middleware);
export default store;
