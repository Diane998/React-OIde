import { useState, useEffect } from 'react';
import bundle from '../budler';
import { useActions } from '../hooks/useActions';

import CodeEditor from './CodeEditor';
import Preview from './Preview';
import Resizable from './Resizable';
import { Cell } from '../redux';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const [bundlingErr, setBundlingErr] = useState('');
  const [code, setCode] = useState('');
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setBundlingErr(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  const handleChange = (value: string) => {
    updateCell(cell.id, value);
  };

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor initialValue={cell.content} onChange={handleChange} />
        </Resizable>
        <Preview code={code} bundlingErr={bundlingErr} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
