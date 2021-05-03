// import produce from 'immer';
import _ from 'lodash';
import { AnyAction } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Cell } from '../cell';

const { MOVE_CELL, DELETE_CELL, INSERT_CELL_BEEFORE, UPDATE_CELL } = ActionType;

export interface CellsState {
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

const cellsReducer = (state: CellsState = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_CELL:
      const { id, content } = action.payload;
      return {
        ...state,
        data: { ...state.data, [id]: { ...state.data[id], content } }
      };
    case DELETE_CELL:
      return {
        ...state,
        data: _.omit(state.data, action.payload),
        order: state.order.filter(e => e !== action.payload)
      };
    case MOVE_CELL:
      const { direction } = action.payload;

      const index = state.order.findIndex(id => id === action.payload.id);
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      console.log(index, targetIndex);

      return targetIndex < 0 || targetIndex > state.order.length - 1
        ? { ...state, order: [...state.order, action.payload] }
        : {
            ...state,
            order: [
              ...state.order.slice(0, targetIndex),
              action.payload.id,
              ...state.order.slice(targetIndex)
            ]
          };
    case INSERT_CELL_BEEFORE:
      const cell: Cell = {
        id: randomID(),
        type: action.payload.type,
        content: ''
      };

      state.data[cell.id] = cell;

      const foundIndex = state.order.findIndex(id => id === action.payload.id);

      return foundIndex < 0
        ? { ...state, order: [...state.order, cell.id] }
        : {
            ...state,
            order: [...state.order, state.order.splice(foundIndex, 0, cell.id)]
          };
    default:
      return state;
  }
};

const randomID = () => Math.random().toString(36).substr(2, 5);

export default cellsReducer;
