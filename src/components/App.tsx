import { useState } from 'react';
import bundler from '../budler';

import CodeEditor from './CodeEditor';
import Preview from './Preview';

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onChange = (value: string) => {
    setInput(value);
  };

  const handleClick = async () => {
    const output = await bundler(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor initialValue='const a = 1;' onChange={onChange} />
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default App;
