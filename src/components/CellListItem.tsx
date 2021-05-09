import React from 'react';
import { Cell } from '../redux';
import CodeCell from './CodeCell';
import TextEditor from './TextEditor';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  return cell.type === 'code' ? <CodeCell cell={cell} /> : <TextEditor />;
};

export default CellListItem;
