import { ActionType } from '../action-types';
import { CellTypes } from '../cell';
import {
  Direction,
  MoveCellAction,
  DeleteCellAction,
  InsertCellBeforeAction,
  UpdateCellAction
} from '../actions';

const { MOVE_CELL, DELETE_CELL, INSERT_CELL_BEEFORE, UPDATE_CELL } = ActionType;

export const moveCell = (id: string, direction: Direction): MoveCellAction => ({
  type: MOVE_CELL,
  payload: {
    id,
    direction
  }
});

export const deleteCell = (id: string): DeleteCellAction => ({
  type: DELETE_CELL,
  payload: id
});

export const insertCellBefore = (
  id: string | null,
  cellType: CellTypes
): InsertCellBeforeAction => ({
  type: INSERT_CELL_BEEFORE,
  payload: {
    id,
    type: cellType
  }
});

export const updateCell = (id: string, content: string): UpdateCellAction => ({
  type: UPDATE_CELL,
  payload: {
    id,
    content
  }
});
