import { Reducer } from 'redux';

import { CounterAction, ADD, DECREMENT, INCREMENT } from './actions/counter';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = { count: 0 };

const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + action.payload.amount,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default counterReducer;
