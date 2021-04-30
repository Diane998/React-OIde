import { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from '../plugins/unpkg-path-plugin';
import { fetchPlugin } from '../plugins/fetch-plugin';
import CodeEditor from './CodeEditor';
import Preview from './Preview';

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleClick = async () => {
    if (!ref.current) return;

    const res = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window'
      }
    });

    setCode(res.outputFiles[0].text);
  };

  return (
    <div>
      <CodeEditor
        initialValue='const a = 1;'
        onChange={value => setInput(value)}
      />
      <textarea value={input} onChange={onChange}></textarea>
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default App;
