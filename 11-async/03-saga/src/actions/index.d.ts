export interface Action<Payload> {
  type: string;
  payload?: Payload;
  error?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: { [key: string]: any } | null;
}

export interface ActionStart<ActionType, Params> {
  type: ActionType;
  payload?: Params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: { [key: string]: any } | null;
}

export interface ActionSucceed<ActionType, Params, Result> {
  type: ActionType;
  payload: {
    params: Params;
    result: Result;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: { [key: string]: any } | null;
}

export interface ActionFail<ActionType, Params, AnyError> {
  type: ActionType;
  payload: {
    params: Params;
    error: AnyError;
  };
  error: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: { [key: string]: any } | null;
}
