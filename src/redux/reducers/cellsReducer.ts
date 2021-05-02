import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Cell } from '../cell';

const { MOVE_CELL, DELETE_CELL, INSERT_CELL_BEEFORE, UPDATE_CELL } = ActionType;

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const INITIAL_STATE: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {}
};

const cellsReducer = (
  state: CellsState = INITIAL_STATE,
  action: Action
): CellsState => {
  switch (action.type) {
    case UPDATE_CELL:
      return state;
    case DELETE_CELL:
      return state;
    case MOVE_CELL:
      return state;
    case INSERT_CELL_BEEFORE:
      return state;
    default:
      return state;
  }
};

export default cellsReducer;
