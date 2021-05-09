import { useActions } from '../hooks/useActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddCell.css';

interface AddCellProps {
  nextCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId, forceVisible }) => {
  const { insertCellBefore } = useActions();

  return (
    <div className={`add-cell ${forceVisible ? 'force-visible' : null}`}>
      <div className='button-wrapper'>
        <button
          className='button is-secondary is-outlined is-small'
          onClick={() => insertCellBefore(nextCellId, 'code')}
        >
          <span className='icon' style={{ marginRight: 3 }}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          Code
        </button>
        <button
          className='button is-secondary is-outlined is-small'
          onClick={() => insertCellBefore(nextCellId, 'text')}
        >
          <span className='icon' style={{ marginRight: 3 }}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          Text
        </button>
      </div>

      <div className='divider'></div>
    </div>
  );
};

export default AddCell;
