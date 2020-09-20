import {Action} from 'redux';

export function createInitialState() {
  return {
    current: 0,
  };
}

export type State = ReturnType<typeof createInitialState>;

export default function reducer(state = createInitialState(), action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
