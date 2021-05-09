import './TextEditor.css';
import { useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Cell } from '../redux';
import { useActions } from '../hooks/useActions';
interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const { updateCell } = useActions();

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && e.target && ref.current.contains(e.target as Node))
        return;

      setEditing(false);
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  const handleClick = () => {
    setEditing(true);
  };

  const handleChange = (v?: string | undefined) => {
    updateCell(cell.id, v || '');
  };

  return editing ? (
    <div className='text-editor' ref={ref}>
      <MDEditor value={cell.content} onChange={handleChange} />
    </div>
  ) : (
    <div className='text-editor card' onClick={handleClick}>
      <div className='card-content'>
        <MDEditor.Markdown source={cell.content || '# Click to edit'} />
      </div>
    </div>
  );
};

export default TextEditor;
