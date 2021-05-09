import { useActions } from '../hooks/useActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './ActionBar.css';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className='action-bar'>
      <button
        className='button is-secondary is-outlined is-small'
        onClick={() => moveCell(id, 'up')}
      >
        <span className='icon'>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </button>
      <button
        className='button is-secondary is-small'
        onClick={() => moveCell(id, 'down')}
      >
        <span className='icon'>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
      <button
        className='button is-danger is-small'
        onClick={() => deleteCell(id)}
      >
        <span className='icon'>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </button>
    </div>
  );
};

export default ActionBar;
