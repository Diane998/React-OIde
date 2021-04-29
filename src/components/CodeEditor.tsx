import { useState } from 'react';

import MonacoEditor, {
  EditorDidMount,
  ChangeHandler
} from 'react-monaco-editor';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const [code, setCode] = useState('');

  const onEditorDidMount: EditorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const handleChange: ChangeHandler = (newValue, e) => {
    setCode(newValue);
    onChange(newValue);
  };

  const handleFormat = () => {
    // format that value
    const formatted = prettier.format(code, {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: true,
      singleQuote: true
    });
    // set the current value back in the editor
    setCode(formatted);
  };

  return (
    <div>
      <button onClick={handleFormat}>Format</button>
      <MonacoEditor
        value={code}
        editorDidMount={onEditorDidMount}
        onChange={handleChange}
        width='800'
        height='600'
        language='javascript'
        theme='vs-dark'
        options={{
          wordWrap: 'on',
          showUnused: false,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2
        }}
      />
    </div>
  );
};

export default CodeEditor;
