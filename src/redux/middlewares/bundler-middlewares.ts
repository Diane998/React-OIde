import { Middleware } from './middleware';
import { ActionType } from '../action-types';
import bundle from '../../budler';

let timer: any;

export const bundlerMiddleware: Middleware = ({
  getState,
  dispatch
}) => next => action => {
  next(action);

  if (action.type !== ActionType.UPDATE_CELL) return;

  const {
    cells: { data }
  } = getState();

  const cell = data[action.payload.id];

  if (cell.type === 'text') return;

  clearTimeout(timer);
  timer = setTimeout(async () => {
    console.log('starting bundling.');
    const result = await bundle(action.payload.content);

    dispatch({ type: ActionType.BUNDLE_CREATED, payload: result });
    console.log('dispatched created bundle');
  }, 750);
};
