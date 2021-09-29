import { Context, createWrapper } from 'next-redux-wrapper';
import { createStore, Store, applyMiddleware, AnyAction } from 'redux';
import { reducer, RootState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';

// create a makeStore function
const store = (context: Context) =>
  createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)
      // other store enhancers if any
    )
  );

// export an assembled wrapper
export const wrapper = createWrapper(
  // <Store<RootState>>
  store,
  {
    debug: true,
  }
);

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
