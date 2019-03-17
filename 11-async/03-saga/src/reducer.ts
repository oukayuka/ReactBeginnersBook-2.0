import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { MemberAction } from './actions/github';
import * as ActionType from './actions/githubConstants';
import { User } from './services/github/models';

export interface GithubState {
  users: User[];
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: GithubState = {
  users: [],
  isLoading: false,
};

const githubReducer: Reducer<GithubState, MemberAction> = (
  state: GithubState = initialState,
  action: MemberAction,
) => {
  switch (action.type) {
    case ActionType.GET_MEMBERS_START:
      return {
        ...state,
        users: [],
        isLoading: true,
      };
    case ActionType.GET_MEMBERS_SUCCEED:
      return {
        ...state,
        users: action.payload.result.users,
        isLoading: false,
      };
    case ActionType.GET_MEMBERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default githubReducer;
