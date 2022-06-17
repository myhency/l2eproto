import { createWrapper } from 'next-redux-wrapper';
import { configureStore, EnhancedStore, Store } from '@reduxjs/toolkit';

import slice, { IState } from '../slices';

const devMode = process.env.NODE_ENV === 'development';

const loggerMiddleware = () => (next: any) => (action: any) => {
  return next(action);
};

const store = configureStore({
  reducer: slice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  devTools: devMode,
});

const setupStore = (): EnhancedStore => store;

const makeStore = () => setupStore();

export const wrapper = createWrapper<Store<IState>>(makeStore, {
  debug: devMode,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default wrapper;
