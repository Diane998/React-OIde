import { useState } from 'react';
import bundle from '../budler';

import CodeEditor from './CodeEditor';
import Preview from './Preview';
import Resizable from './Resizable';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onChange = (value: string) => {
    setInput(value);
  };

  const handleClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <CodeEditor initialValue='const a = 1;' onChange={onChange} />
        {/* <div>
          <button onClick={handleClick}>Submit</button>
        </div> */}
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
