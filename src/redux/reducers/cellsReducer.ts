import produce from 'immer';
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

const cellsReducer = produce(
  (state: CellsState = INITIAL_STATE, action: Action) => {
    switch (action.type) {
      case UPDATE_CELL:
        const { id, content } = action.payload;

        state.data[id].content = content;
        return;
      case DELETE_CELL:
        delete state.data[action.payload];
        state.order = state.order.filter(id => id !== action.payload);
        return;
      case MOVE_CELL:
        const { direction } = action.payload;
        const index = state.order.findIndex(id => id === action.payload.id);
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex > state.order.length - 1) return;
        state.order[index] = state.order[targetIndex];
        state.order[targetIndex] = action.payload.id;

        return;
      case INSERT_CELL_BEEFORE:
        const cell: Cell = {
          id: randomID(),
          type: action.payload.type,
          content: ''
        };

        state.data[cell.id] = cell;

        const foundIndex = state.order.findIndex(
          id => id === action.payload.id
        );

        foundIndex < 0
          ? state.order.push(cell.id)
          : state.order.splice(foundIndex, 0, cell.id);
        return;
      default:
        return state;
    }
  }
);

const randomID = () => Math.random().toString(36).substr(2, 5);

export default cellsReducer;
