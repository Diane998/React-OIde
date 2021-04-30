import { useState, useEffect } from 'react';
import bundle from '../budler';

import CodeEditor from './CodeEditor';
import Preview from './Preview';
import Resizable from './Resizable';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [bundlingErr, setBundlingErr] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setBundlingErr(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor initialValue='const a = 1;' onChange={handleChange} />
        </Resizable>
        <Preview code={code} bundlingErr={bundlingErr} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
