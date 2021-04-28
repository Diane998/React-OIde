import { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleClick = async () => {
    if (!ref.current) return;

    const { code, map, warning } = await ref.current.transform(input, {
      loader: 'jsx',
      target: 'es2015'
    });
    setCode(code);
  };

  return (
    <div>
      <textarea value={input} onChange={handleChange}></textarea>
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

export default App;
