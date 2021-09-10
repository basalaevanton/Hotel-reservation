import { Context, createWrapper } from 'next-redux-wrapper';
import { createStore, Store, applyMiddleware, AnyAction } from 'redux';
import { reducer, RootState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

// create a makeStore function
const makeStore = (context: Context) =>
  createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
