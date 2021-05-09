import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers, { RootState } from './reducers';
import { ActionType } from './action-types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore<any, any, any, any>(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };

store.dispatch({
  type: ActionType.INSERT_CELL_BEEFORE,
  payload: {
    id: null,
    type: 'text'
  }
});

store.dispatch({
  type: ActionType.INSERT_CELL_BEEFORE,
  payload: {
    id: null,
    type: 'code'
  }
});

store.dispatch({
  type: ActionType.INSERT_CELL_BEEFORE,
  payload: {
    id: null,
    type: 'text'
  }
});
