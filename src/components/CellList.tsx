import React, { Fragment } from 'react';
import { useTypedSeletor } from '../hooks/useTypedSelector';
import AddCell from './AddCell';
import CellListItem from './CellListItem';

const CellList: React.FC = () => {
  const cells = useTypedSeletor(({ cells: { order, data } }) =>
    order.map(id => data[id])
  );

  return (
    <div>
      {cells.map((cell, i) => (
        <Fragment key={i}>
          <AddCell nextCellId={cell.id} />
          <CellListItem cell={cell} />
        </Fragment>
      ))}
      <AddCell nextCellId={null} />
    </div>
  );
};

export default CellList;
