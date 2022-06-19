import { ISongReducer } from './../interfaces';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, AnyAction } from '@reduxjs/toolkit';

import { IHeadphoneReducer, IPlaylistReducer } from '../interfaces';

import headphone from './headphone';
import playlist from './playlist';
import song from './song';

export interface IState {
  headphone: IHeadphoneReducer;
  playlist: IPlaylistReducer;
  song: ISongReducer;
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
        playlist: playlist.reducer,
        song: song.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
