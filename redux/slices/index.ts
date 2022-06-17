import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, AnyAction } from '@reduxjs/toolkit';

import { IHeadphoneReducer } from '../interfaces';

import headphone from './headphone';

export interface IState {
  headphone: IHeadphoneReducer;
}

const rootReducer = (state: IState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    }

    default: {
      const combineReducer = combineReducers({
        headphone: headphone.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
