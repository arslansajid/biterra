import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
// import rootSaga from '../sagas';

const middlewares = [];

// const sagaMiddleware = createSagaMiddleware();
// middlewares.push(sagaMiddleware);

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  // sagaMiddleware.run(rootSaga);

  return store;
}
