import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../redux';
import CellList from './CellList';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div>
          <CellList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
