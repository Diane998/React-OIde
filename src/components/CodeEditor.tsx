import MonacoEditor, {
  EditorDidMount,
  ChangeHandler
} from 'react-monaco-editor';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const onEditorDidMount: EditorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const handleChange: ChangeHandler = (newValue, e) => {
    onChange(newValue);
  };

  return (
    <MonacoEditor
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
  );
};

export default CodeEditor;
