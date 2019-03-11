export interface Action<ActionType, Payload> {
  type: ActionType;
  payload?: Payload;
  error?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: { [key: string]: any } | null;
}
