import { SessionInitialState } from './session.initialState';
import { SET_LOCATION } from '../actions';
import { setLocation } from './actions';
export function sessionReducer(
  state = SessionInitialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case SET_LOCATION:
      return setLocation(state, action.payload);
    default:
      return state;
  }
}
