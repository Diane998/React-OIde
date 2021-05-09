import React from 'react';
import { Cell } from '../redux';
import ActionBar from './ActionBar';
import CodeCell from './CodeCell';
import TextEditor from './TextEditor';
import './CellListItem.css';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  child =
    cell.type === 'code' ? (
      <>
        <div className='action-bar-wrapper'>
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    ) : (
      <>
        <div className='action-bar-wrapper'>
          <ActionBar id={cell.id} />
        </div>
        <TextEditor cell={cell} />
      </>
    );

  return (
    <div className='cell-list-item'>
      {child}
      <ActionBar id={cell.id} />
    </div>
  );
};

export default CellListItem;
