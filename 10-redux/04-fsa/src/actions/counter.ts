import { Action } from '.';

export enum CounterActionType {
  ADD = 'COUNTER/ADD',
  DECREMENT = 'COUNTER/DECREMENT',
  INCREMENT = 'COUNTER/INCREMENT',
}

export type CounterAction = Action<CounterActionType, { amount: number }>;

export const add = (amount: number): CounterAction => ({
  type: CounterActionType.ADD,
  payload: { amount },
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});
