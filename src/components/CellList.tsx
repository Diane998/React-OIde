import { useTypedSeletor } from '../hooks/useTypedSelector';
import CellListItem from './CellListItem';

const CellList: React.FC = () => {
  const cells = useTypedSeletor(({ cells: { order, data } }) =>
    order.map(id => data[id])
  );

  return (
    <div>
      {cells.map(cell => (
        <CellListItem key={cell.id} cell={cell} />
      ))}
    </div>
  );
};

export default CellList;
