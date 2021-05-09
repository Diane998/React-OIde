import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const { BUNDLE_CREATED } = ActionType;

interface BundlesState {
  [key: string]: {
    code: string;
    err: string;
  };
}

const INITIAL_STATE: BundlesState = {};

export const bundlesReducer = produce(
  (state: BundlesState = INITIAL_STATE, action: Action): BundlesState => {
    switch (action.type) {
      case BUNDLE_CREATED:
        return state;
      default:
        return state;
    }
  }
);

export default bundlesReducer;
