import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Redux/Reducers';

import firebase from './firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
//import { createFirestoreInstance } from 'redux-firestore';

import App from './App';
import '../node_modules/antd/dist/antd.css';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'wishlist'],
};

export const create = () => {
  const enhancer = composeWithDevTools(applyMiddleware(thunk));
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
};

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   ),
// );
const store = create();
const rrfConfig = {
  userProfile: 'users',
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.store.dispatch,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
