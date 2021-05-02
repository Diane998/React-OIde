import { ActionType } from '../action-types';

import { CellTypes } from '../cell';

const { MOVE_CELL, DELETE_CELL, INSERT_CELL_BEEFORE, UPDATE_CELL } = ActionType;

export type Direction = 'up' | 'down';

export interface MoveCellAction {
  type: typeof MOVE_CELL;
  payload: {
    id: string;
    direction: 'up' | 'down';
  };
}

export interface DeleteCellAction {
  type: typeof DELETE_CELL;
  payload: string;
}

export interface InsertCellBeforeAction {
  type: typeof INSERT_CELL_BEEFORE;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

export interface UpdateCellAction {
  type: typeof UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellBeforeAction
  | UpdateCellAction;
