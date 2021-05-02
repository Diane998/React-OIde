// import CodeCell from './CodeCell';
import { Provider } from 'react-redux';
import { store } from '../redux';
import TextEditor from './TextEditor';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <CodeCell /> */}
        <TextEditor />
      </div>
    </Provider>
  );
};

export default App;
